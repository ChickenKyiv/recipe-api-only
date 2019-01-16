<?php


/**
 * @property int $id
 * @property int $parent_id Foreign key
 * @property int $child_id Foreign key
 * @property int $unit_id Foreign key
 * @property float $amount Measurement unit amount
 * @property string $comment
 * @property int $order
 * @property-read string $measurementUnitTitle
 * *** ***********************************************Ingredient $ingredient Relation to Ingredient

 */
class IngredientLink extends PActiveRecord
{

  public $measurementUnitTitle;


	/**
	 * Returns the static model of the specified AR class.
	 * @param string $className active record class name.
	 * @return IngredientDirection the static model class
	 */
	public static function model($className = __CLASS__)
	{
		return parent::model($className);
	}


	/**
	 * @return string the associated database table name
	 */
	public function tableName()
	{
		return '{{ingredient_links}}';
	}


	public function behaviors()
	{
		return [
			'CapturePostBehavior' => [
				'class' => 'ext.project.behaviors.CapturePostBehavior',
			],
		];
	}


	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{

		return [
			['comment', 'safe'],
			['parent_id, child_id, unit_id, amount', 'required'],
			['parent_id, child_id, unit_id', 'numerical', 'min' => 1, 'integerOnly' => true, 'allowEmpty' => false],
                                                      ['amount', 'numerical'],
			['comment', 'length', 'max' => 2000, 'allowEmpty' => true],
		];
	}


	/**
	 * @return array relational rules.
	 */
	public function relations()
	{

		return [
			'parent' => [self::BELONGS_TO, 'Ingredient', 'parent_id'],
      'ingredient' => [self::HAS_ONE, 'Ingredient', ['id' => 'child_id']],
      'measurementUnit' => [self::HAS_ONE, 'MeasurementUnit', ['id' => 'unit_id']],
		];
	}


	public function ingredient($ingredient)
	{
		if (!$ingredient = ToolboxHelper::ensureActiveModel($ingredient, 'Ingredient')) {
			throw new CException('Record does not exists or not saved yet.');
		}

		$c = new CDbCriteria();
		$c->compare('parent_id', $ingredient->primaryKey);
		$this->dbCriteria->mergeWith($c);
		return $this;
	}


	public function exclude($step)
	{
		$c = new CDbCriteria();

		if ($step instanceof IngredientLink) {
			$exclude = $step->id;
		} else {
			$exclude = $step;
		}

		if (is_array($exclude)) {
			$c->addInCondition($this->tableAlias . '.id', $exclude);
		} else {
			$c->addCondition($this->tableAlias . '.id<>' . intval($exclude));
		}

		$this->dbCriteria->mergeWith($c);
		return $this;
	}





	public function renderBackendModal($return = false, $useForm = false)
	{
		$params = [ 'model' => $this];
		$view = '//shared/_links_modal';
		return Yii::app()->controller->renderPartial($view, $params, $return);
	}


	public function getOrderUrl($direction)
	{
		return Yii::app()->createUrl('recipes/ajax/orderLink', [
				'id' => $this->parent->id,
				'link' => $this->id,
				'direction' => $direction,
		]);
	}

  public function getDeleteUrl()
	{
		return Yii::app()->createUrl('recipes/ajax/deleteLink', [
				'id' => $this->parent->id,
				'link' => $this->id,
		]);
	}


	/**
	 * Retrieves a list of models based on the current search/filter conditions.
	 * @return CActiveDataProvider the data provider that can return the models based on the search/filter conditions.
	 */
	public function search()
	{
		$criteria = new CDbCriteria;
		$criteria->compare('id', $this->id);
		$criteria->compare('ingredient_id', $this->ingredient_id);
		return new CActiveDataProvider($this, array(
			'criteria' => $criteria,
		));
	}


	protected function beforeSave()
	{
		if ($this->isNewRecord) {
			$cmd = Yii::app()->db->createCommand('SELECT MAX(`order`) FROM ' . $this->tableSchema->name);
			$current = intval($cmd->queryScalar());
			$this->order = $current + 1;
		}
		return parent::beforeSave();
	}

  protected function afterFind()
	{
		parent::afterFind();
    $this->measurementUnitTitle =
        $this->amount > 1
          ? $this->measurementUnit->plural
          : $this->measurementUnit->singular;

    $this->amount = floatval($this->amount);

	}

}
