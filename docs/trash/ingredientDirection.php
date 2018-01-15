<?php


/**
 * @property int $id
 * @property int $ingredient_id Foreign key
 * @property Ingredient $ingredient Relation to Ingredient
 * @property string $direction Text of direction step 
 * @property int $order
 */
class IngredientDirection extends PActiveRecord
{


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
		return '{{ingredient_directions}}';
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
			['direction', 'safe'],
			['ingredient_id, direction', 'required'],
			['ingredient_id', 'numerical', 'min' => 1, 'integerOnly' => true, 'allowEmpty' => false],
			['direction', 'length', 'max' => 2000, 'allowEmpty' => false],
		];
	}


	/**
	 * @return array relational rules.
	 */
	public function relations()
	{

		return [
			'ingredient' => [self::BELONGS_TO, 'Ingredient', 'ingredient_id'],
		];
	}


	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'id' => 'ID',
			'direction' => Yii::t('common', 'Direction Step'),
		);
	}


	public function ingredient($ingredient)
	{
		if (!$ingredient = ToolboxHelper::ensureActiveModel($ingredient, 'Ingredient')) {
			throw new CException('Record does not exists or not saved yet.');
		}

		$c = new CDbCriteria();
		$c->compare('ingredient_id', $ingredient->primaryKey);
		$this->dbCriteria->mergeWith($c);
		return $this;
	}


	public function exclude($step)
	{
		$c = new CDbCriteria();

		if ($step instanceof IngredientDirection) {
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


	public function previous()
	{
		if (!$this->primaryKey || !$this->order) {
			throw new CException('The record is not saved yet or order field is empty.');
		}

		$c = new CDbCriteria();
		$c->addCondition($this->tableAlias . '.`order`<:order');
		$c->params = [':order' => $this->order];
		$c->order = $this->tableAlias . '.`order` DESC';

		$this->dbCriteria->mergeWith($c);
		return $this;
	}


	public function next()
	{
		if (!$this->primaryKey || !$this->order) {
			throw new CException('The record is not saved yet or order field is empty.');
		}

		$c = new CDbCriteria();
		$c->addCondition($this->tableAlias . '.`order`>:order');
		$c->params = [':order' => $this->order];
		$c->order = $this->tableAlias . '.`order` ASC';

		$this->dbCriteria->mergeWith($c);
		return $this;
	}


	public function switchOrder(IngredientDirection $with)
	{
		$temp = $with->order;
		$with->order = $this->order;
		$this->order = $temp;

		$with->saveAttributes(['order']);
		$this->saveAttributes(['order']);

		return $this;
	}


	public function renderBackendModal($return = false, $useForm = false)
	{
		$params = [ 'model' => $this];
		$view = '//shared/_direction_modal';
		return Yii::app()->controller->renderPartial($view, $params, $return);
	}


	public function getOrderUrl($direction)
	{
		return Yii::app()->createUrl('recipes/ajax/orderStep', [
				'id' => $this->ingredient->id,
				'step' => $this->id,
				'direction' => $direction,
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

}

