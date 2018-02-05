<?php

Yii::import('ext.project.interfaces.IPreviewable');


/**
 * @property string $kind
 * @property int $main_image_id
 * @property int $grocerylistIndex Index of an ingredient(simple recipe) in the grocery list
 *
 * @property-read IngredientImage $avatar Main Image
 * @property-read IngredientDirection[] $directions
 */
class Ingredient extends PActiveRecord implements IPreviewable
{

	const IT_SIMPLE = 'Simple';
	const IT_COMPLEX = 'Complex';
	const IT_RECIPE = 'Recipe';
  const IT_COMPLEX_RECIPE = 'Complex_Recipe';

  const maxServingsAllowed = 8;

	public $tagData = '';
	protected $_times = [
		'preparation_time_min',
		'preparation_time_max',
		'cook_time_min',
		'cook_time_max',
		'passive_time_min',
		'passive_time_max',
	];
	protected $_timePrepared = false;

  public $groceryListIndex;

  /** @var bool|int $actualServings servings number selected by the user */
  public $actualServings=false;

  public $recipeRating = false;
  public $isFavorite = false;

	/**
	 * Returns the static model of the specified AR class.
	 * @param string $className active record class name.
	 * @return Ingredient the static model class
	 */


	/**
	 * @return string the associated database table name
	 */
	public function tableName()
	{
		return '{{ingredients}}';
	}


	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		return [
			['kind', 'safe', 'on' => 'recipeType'],
			['kind', 'required'],
			['kind', 'in', 'range' => $this->getEnumValues('kind')],
			['title', 'required', 'on' => 'insert, update, recipeInfo'],
			['title, note, alias, description, meta_keywords, meta_description, meta_robots, is_free', 'safe', 'on' => 'insert, update, recipeInfo, search'],
			['title', 'length',
			'max' => 255, 'allowEmpty' => false, 'on' => 'insert, update, recipeInfo'],
			['alias', 'length',
			'max' => 60, 'allowEmpty' => false, 'on' => 'insert, update, recipeInfo'],
			['main_image_id', 'numerical',
			'allowEmpty' => true, 'integerOnly' => true, 'min' => 1],
                                                      ['serving_amount', 'numerical', 'allowEmpty' => false, 'integerOnly' => true, 'min' => 1, 'max' => 8, 'on' => 'insert, update, recipeLinks'],
			['meta_robots', 'in',
			'range' => $this->getEnumValues('meta_robots'), 'allowEmpty' => true],
			[
				'preparation_time_min, preparation_time_max, cook_time_min, cook_time_max, passive_time_min, passive_time_max',
				'filter',
				'filter' => 'trim',
				'on' => 'insert, update, recipeTiming',
			],
			[
				'preparation_time_min, preparation_time_max, cook_time_min, cook_time_max, passive_time_min, passive_time_max',
				'ext.project.validators.PTimeValidator',
				'on' => 'insert, update, recipeTiming',
			],
			[
				'preparation_time_min, preparation_time_max, cook_time_min, cook_time_max, passive_time_min, passive_time_max',
				'default',
				'value' => '0',
				'on' => 'insert, update, recipeTiming',
			],
			[ 'tagData, group_id, cuisine_id, course_id', 'safe', 'on' => 'recipeGrouping']
			/*
			 *  Seems it is not necessary
			  [
			  'preparation_time_min',
			  'validateTimePair',
			  'dependentAttribute' => 'preparation_time_max',
			  'on' => 'insert, update, recipeTiming',
			  ],
			 *
			 */
			//[['ingredient'], 'required'],
		];
	}


	public function behaviors()
	{
		$result = parent::behaviors();

		$result['enumField'] = 'ext.project.behaviors.EnumFieldBehavior';

		$result['CTimestampBehavior'] = [
			'class' => 'zii.behaviors.CTimestampBehavior',
			'createAttribute' => 'created_at',
			'updateAttribute' => 'updated_at',
			'setUpdateOnCreate' => true,
		];

		$result['AliasBehavior'] = [
			'class' => 'ext.project.behaviors.AliasBehavior',
			'source' => 'title',
			'destination' => 'alias',
			'forceUpdate' => true,
			'maxLength' => 50,
		];

    $result['ListSelfBehavior'] = [
        'class' => 'ext.project.behaviors.ListSelfBehavior',
        'attrText' => 'titlePlusNote',

    ];

		return $result;
	}


	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'title' => 'Title',
			'group_id' => 'Group',
			'cuisine_id' => 'Cuisine',
			'course_id' => 'Course',
                                                      'serving_amount' => 'Servings',
                                                      'is_free' => 'Free',
		);
	}


	/**
	 * @return array relational rules.
	 */
	public function relations()
	{
		return array(
			'tags' => [self::MANY_MANY, 'Tag', 'pid_tag_ingredient(ingredient_id, tag_id)'],
                                                      'ingredients' => [
                                                                        self::MANY_MANY,
                                                                        'Ingredient', 'pid_ingredient_links(parent_id, child_id)',
                                                                        'order' => '`ingredients_ingredients`.`order` ASC',
                                                    ],
			'avatar' => [self::HAS_ONE, 'IngredientImage', ['id' => 'main_image_id']],
			'directions' => [
				self::HAS_MANY,
				'IngredientDirection',
				'ingredient_id',
				'order' => 'directions.`order` ASC',
			],
                                                      'links' => [
				self::HAS_MANY,
				'IngredientLink',
				'parent_id',
                                                                        'with' => [
                                                                            'ingredient' =>[
                                                                                    'joinType' => 'INNER JOIN',
                                                                                ]
                                                                            ],
				'order' => 'kind ASC, `order` ASC'
			],
                                                      'parentLinks' => [
				self::HAS_MANY,
				'IngredientLink',
				'child_id',
                                                                        'joinType' => 'LEFT JOIN'
//                                                                        'with' => 'ingredient',
//				'order' => 'kind ASC, `order` ASC'
			],
			'images' => [
				self::HAS_MANY,
				'IngredientImage',
				'ingredient_id',
				'order' => 'images.`id` ASC',
			],
                                                      'comments' => array(self::HAS_MANY, 'IngredientComment', 'ingredient_id'),
                                                      'favorites' => array(self::HAS_MANY, 'IngredientFavorite', 'ingredient_id'),
                                                      'averageRating' => array(self::STAT, 'IngredientRating', 'ingredient_id', 'select' => 'AVG(rating)')
		);
	}

                   public function search($scopes=false, $options=[])
                   {
                        $criteria=new CDbCriteria;

                        $criteria->compare('title', $this->title, true);

                        $criteria->compare('kind', $this->kind);

                        if( is_array($scopes) ) $criteria->scopes = $scopes;

                        $options['criteria'] = $criteria;

                        return new CActiveDataProvider('Ingredient', $options);
                   }

	public function scopes()
	{
		return [
			'list' => [
				'with' => ['avatar'],
			],
                                                      'published' => [
				'condition' => 'is_draft = 0',
			],
                                                      'free' => [
				'condition' => 'is_free = 1 AND (kind = \''. Ingredient::IT_RECIPE. '\' OR kind = \''. Ingredient::IT_COMPLEX_RECIPE. '\')',
			],
		];
	}


        /**
         * Filter complex recipes. Or simple recipes not belonging to any complex recipes.
         * i.e. "integral" recipes which could be used as a weekly menu item
         *
         * @return Ingredient
         *
         */
            public function integral()
            {
              $criteria=new CDbCriteria();
              $criteria->join = 'LEFT JOIN {{ingredient_links}} as parents ON parents.child_id = t.id';
              $criteria->addCondition('t.kind=\''. Ingredient::IT_COMPLEX_RECIPE.'\'
                                                                                OR (parents.id IS NULL AND t.kind=\''. Ingredient::IT_RECIPE.'\')');

              $this->getDbCriteria()->mergeWith($criteria);
              return $this;
            }

            public function favorites()
            {
              $criteria=new CDbCriteria();
              $criteria->join = 'LEFT JOIN {{ingredient_favorites}} as favorites ON favorites.ingredient_id = t.id';
              $criteria->addCondition('favorites.user_id=\''. UserHelper::current()->id. '\'');

              $this->getDbCriteria()->mergeWith($criteria);
              return $this;
            }
            public function top_rated()
            {

               /** @TODO Maybe add a condition for a minimum number of user votes for the recipe to have */

              $criteria=new CDbCriteria();
              $criteria->select = 't.*, AVG(rating) averageRating';
              $criteria->join = 'LEFT JOIN {{ingredient_ratings}} as ratings ON ratings.ingredient_id = t.id';
              $criteria->group = 't.id';
              $criteria->order = 'averageRating DESC';

              $this->getDbCriteria()->mergeWith($criteria);
              return $this;
            }

	/**
	 *
	 * @return array
	 */
	public function listKinds()
	{
		return $this->getEnumValues('kind', true);
	}


	/**
	 *
	 * @param array $params
	 * @return CActiveDataProvider
	 * @throws CException
	 */
	public function getImageProvider($params = [], $excludeMain = false)
	{
		if (!$this->primaryKey) {
			throw new CException('Record is not saved yet.');
		}

		$finder = new IngredientImage();
		$finder->ingredient($this)->with('ingredient');

		if ($excludeMain) {
			if (!$this->main_image_id) {
				throw new CException('Main image is not set.');
			}
		}

		$finder->except($this->id);
		return $finder->getDataProvider($params);
	}


	/**
	 *
	 * @param array $params
	 * @param boolean $activeProvider
	 * @return CDataProvider
	 * @throws CException
	 */
	public function getDirectionProvider($params = [], $activeProvider = false)
	{
		if (!$this->primaryKey) {
			throw new CException('Record is not saved yet.');
		}

		if ($activeProvider) {
			$finder = new IngredientDirection();
			$finder->ingredient($this);
			$result = $finder->getDataProvider($params);
		} else {
			$result = new CArrayDataProvider($this->directions);
		}

		if (!isset($params['pagination'])) {
			$result->pagination = false;
		}

		return $result;
	}

                   public function getIngredients($asDataProvider=true, $criteria=false){

                       /** @var IngredientLink[] $ingredients */
                        $ingredients = IngredientLink::model()->findAllByAttributes(['parent_id' => $this->id], $criteria);

                        foreach ($ingredients as $k => $link) {

                            switch ($link->ingredient->kind) {
                                case self::IT_SIMPLE :
                                    if ($ingredients[$k]->amount > 0) {

                                        $singleServingAmount = $ingredients[$k]->amount / $this->serving_amount;

                                        $amount = $singleServingAmount ? $this->actualServings * $singleServingAmount : $ingredients[$k]->amount;

                                        /** @NOTE Rounding amount. Precision is 0.05 if amount is less than 1 */
                                        $grain = $ingredients[$k]->amount < 1 ? 20 : 4;
                                        $amount = round($amount * $grain) / $grain;

                                        $ingredients[$k]->amount = $amount;
                                    }
                                    break;

                                case self::IT_COMPLEX :
                                    $ingredients[$k]->ingredient->actualServings = $this->actualServings * $ingredients[$k]->amount;
                                    break;
                            }
                        }

                        return $asDataProvider ? new CArrayDataProvider($ingredients, ['pagination' => false]) : $ingredients;
                   }

                   /**
	 * Returns child ingredients(recipes), having the number of servings set up for each one
	 * @return array An array of Ingredient objects
	 */
                   public function getChildRecipes()
                   {
                       $childRecipes = $this->ingredients;
                       foreach($childRecipes as $k=>$child){
                           $childRecipes[$k]->actualServings = $this->actualServings;
                       }
                       return $childRecipes;
                   }

                   /**
	 *
	 * @param array $params
	 * @param boolean $activeProvider
	 * @return CDataProvider
	 * @throws CException
	 */
	public function getLinkProvider($params = [], $activeProvider = false)
	{
		if (!$this->primaryKey) {
			throw new CException('Record is not saved yet.');
		}

		if ($activeProvider) {
			$finder = new IngredientLink();
			$finder->ingredient($this);
			$result = $finder->getDataProvider($params);
		} else {
			$result = new CArrayDataProvider($this->links);
		}

		if (!isset($params['pagination'])) {
			$result->pagination = false;
		}

		return $result;
	}


	public function getKindTitle()
	{
		$result = 'item';

		switch ($this->kind) {
			case self::IT_SIMPLE :
				$result = 'simple ingredient';
				break;
			case self::IT_COMPLEX :
				$result = 'complex ingredient';
				break;
			case self::IT_RECIPE :
				$result = 'recipe';
				break;
                                                      case self::IT_COMPLEX_RECIPE :
				$result = 'complex recipe';
				break;
			default:
				break;
		}

		return $result;
	}


	public function getFrontendUrl($params = [], $forceAbsoluteUrl=false)
	{
		$params['id'] = $this->id;
		$params['alias'] = $this->alias;
		if (Yii::app()->hasComponent('frontend')) {
			return Yii::app()->frontend->createAbsoluteUrl('recipe/view', $params);
		} else {
                                                      return $forceAbsoluteUrl ? Yii::app()->createAbsoluteUrl('recipe/view', $params) : Yii::app()->createUrl('recipe/view', $params);
		}
	}


	public function getPreviewCode()
	{
		return md5(sha1($this->primaryKey . $this->alias));
	}


	public function getPreviewLink()
	{
		return $this->getFrontendUrl(['preview' => $this->previewCode]);
	}


	public function getMainImageUrl($size = 'admin', $absolute=false)
	{

                                    if( !$this->avatar ){

                                        foreach($this->ingredients as $ingredient){
                                            if( !empty($ingredient->avatar) ){
                                                $this->avatar = $ingredient->avatar;
                                                break;
                                            }
                                        }
                                    }

                                    if( $this->avatar ){

                                        if( $absolute ){

                                            if( Yii::app()->hasComponent('frontend') ) {
                                                    return Yii::app()->frontend->createAbsoluteUrl($this->avatar->getImageUrl('filename', $size));
                                            } else {
                                                    return Yii::app()->createAbsoluteUrl($this->avatar->getImageUrl('filename', $size));
                                            }

                                        }
                                        return $this->avatar->getImageUrl('filename', $size);

                                    }

                                    return null;

	}


	public function publish()
	{
		if ($this->is_draft)
			return $this->saveAttributes(['is_draft' => 0]);
	}


	public function unpublish()
	{
		if (!$this->is_draft)
			return $this->saveAttributes(['is_draft' => 1]);
	}


	public function getBackendProvider($options = [])
	{
		return $this
				->list()
				->search();
	}


	public function getPreparationTime()
	{
		return $this->getRangeFromPair('preparation_time');
	}


	public function getCookTime()
	{
		return $this->getRangeFromPair('cook_time');
	}


	public function getPassiveTime()
	{
		return $this->getRangeFromPair('passive_time');
	}


	public function prepareTimeValues()
	{
		foreach ($this->_times as $attribute) {
			if ($this->$attribute) {
				$this->$attribute = DateTimeHelper::convertToString(DateTimeHelper::convertFromString($this->$attribute));
			}
		}

		$this->_timePrepared = true;
	}


	protected function beforeSave()
	{
		foreach ($this->_times as $attr) {
			$this->$attr = DateTimeHelper::convertFromString($this->$attr);
		}

		if (!$this->group_id) {
			$this->group_id = null;
		}

		return parent::beforeSave();
	}


	protected function afterSave()
	{
		$this->processTags();
	}


	protected function afterFind()
	{
		parent::afterFind();
		$this->prepareTimeValues();
	}


	protected function processTags()
	{
		if ($this->tagData) {
			$tagArray = explode(',', strtolower($this->tagData));

			if ($tagArray) {
				$existed = Tag::model()->findByNames($tagArray);
				$compare = array_values(CHtml::listData($existed, 'id', 'name'));
				$new = array_diff($tagArray, $compare);
				$new = array_unique($new);

				if ($new) {
					$insertions = [];
					foreach ($new as $newName) {
						$t = new Tag();
						$t->name = $newName;
						$t->save();
						$insertions[] = $t;
					}

					$existed = array_merge($existed, $insertions);

					$sql = 'INSERT INTO ' . TagIngredient::model()->tableSchema->name . ' (tag_id, ingredient_id) VALUES ';

					$i = 0;
					foreach ($existed as $tag) {
						$sql .= ($i ? ', ' : '') . '(' . $tag->id . ',' . $this->id . ')';
						$i++;
					}

					Yii::app()->db->createCommand($sql)->execute();
				}
			}
		}
	}


	protected function deleteTags()
	{
		return TagIngredient::model()->deleteAll('ingredient_id=:iid', [':iid' => $this->id]);
	}


	protected function getRangeFromPair($pairName, $separator = ' - ')
	{
		$minAttr = $pairName . '_min';
		$maxAttr = $pairName . '_max';

		$result = false;

		if (!$this->_timePrepared) {
			$this->prepareTimeValues();
		}

		if ($this->$minAttr) {
			$result .= $this->$minAttr;
		}

		if ($this->$maxAttr) {
			$result .= ($result) ? $separator . $this->$maxAttr : $this->$maxAttr;
		}

		return $result;
	}

                  public function getTitlePlusNote()
                  {
                      return $this->note ? $this->title. ' - '. $this->note : $this->title;
                  }

                  public function getCommentCount() {
                    return count($this->comments);
                }

                public function getUserRating(User $user)
                {
                    $ratingModel = IngredientRating::model()->findByAttributes(['ingredient_id' => $this->id, 'user_id' => $user->id]);
                    return $ratingModel === null ? false: $ratingModel->rating;
                }

                public function isFavorite($user)
                {
                    $favoriteModel = null;
                    if( is_a($user, 'User') )
                        $favoriteModel = IngredientFavorite::model()->findByAttributes(['ingredient_id' => $this->id, 'user_id' => $user->id]);

                    return $favoriteModel === null ? false: true;
                }
}
