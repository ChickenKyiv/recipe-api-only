<?php


/**
 * @property int $id
 * @property int $ingredient_id Foreign key
 * @property Ingredient $ingredient Relation to Ingredient
 * @property string $filename
 */
class IngredientImage extends PActiveRecord
{



	/**
	 * @return string the associated database table name
	 */
	public function tableName()
	{
		return '{{ingredient_images}}';
	}


	public function behaviors()
	{
		return [
			'CTimestampBehavior' => [
				'class' => 'zii.behaviors.CTimestampBehavior',
				'createAttribute' => 'added_at',
				'updateAttribute' => 'updated_at',
				'setUpdateOnCreate' => true,
			],

            'ImageFieldBehavior' => [
                'class' => 'ext.project.image.ImageFieldBehavior',
                'imageComponent' => 'image',
                'attributes' => ['filename'],
				'webroot' => 'frontroot',
            ],

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
			['filename', 'safe'],
			['ingredient_id', 'required'],
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

	public function except($id)
	{
		if (!is_array($id)) {
			$this->dbCriteria->addCondition($this->tableAlias.'.id <> :excludeId');
			$this->dbCriteria->params = array_merge($this->dbCriteria->params, [':excludeId' => (string) $id]);
		} else {
			$this->dbCriteria->addNotInCondition($this->tableAlias.'.id', $id);
		}

		return $this;
	}


	public function getIsMain()
	{
		return ($this->ingredient) ?  $this->ingredient->main_image_id == $this->id : false;
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

}
