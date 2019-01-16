<?php

/**
 * @property int $id
 * @property int $ingredient_id 
 * @property string $content
 * @property int $user_id
 * @property int $parent_id
 * @property string $status
 * @property string $created_at
 */
class IngredientComment extends PActiveRecord {

    const STATUS_PENDING = 'Pending';
    const STATUS_APPROVED = 'Publish';
    const STATUS_DRAFT = 'Draft';

    public static function model($className = __CLASS__) {
        return parent::model($className);
    }

    public function tableName() {
        return '{{ingredient_comments}}';
    }

    public function behaviors() {
        $result = parent::behaviors();

        $result['CTimestampBehavior'] = [
            'class' => 'zii.behaviors.CTimestampBehavior',
            'createAttribute' => 'created_at',
//			'updateAttribute' => 'updated_at',
//			'setUpdateOnCreate' => true,
        ];

        return $result;
    }

    /**
     * @return array relational rules.
     */
    public function relations() {
        return array(
            'ingredient' => array(self::BELONGS_TO, 'Ingredient', 'ingredient_id'),
            'user' => array(self::BELONGS_TO, 'User', 'user_id'),
            'parentComment' => array(self::BELONGS_TO, 'IngredientComment', 'parent_id'),
            'childComments' => [
                    self::HAS_MANY,
                    'IngredientComment',
                    'parent_id',
            ],
        );
    }

    public function rules() {
        return [
            ['content', 'length', 'max' => 2500],
            ['content', 'required', 'on' => 'insert'],
            ['parent_id', 'safe', 'on' => 'insert'],
            ['content', 'required', 'on' => 'logged'],
            ['status', 'required', 'on' => 'status'],
        ];
    }

    public function scopes() {
        return array(
            'published' => array(
                'condition' => 'status = ' . self::STATUS_APPROVED,
            ),
             'root_comments' => array(
                'condition' => 'parent_id IS NULL',
            ),
        );
    }

    public function attributeLabels() {
        return array(
            'user_id' => 'Comment author',
        );
    }
    
     protected function attributeFormats() {
        return array(        
            'created_at' => function() {
                return date('F d, Y - g.i A', strtotime($this->created_at));
            },

        );
    }
    
    protected function beforeSave() {
        
        $this->content = nl2br($this->content);

        return parent::beforeSave();
    }

    public function search() {
        $criteria = new CDbCriteria( );

        $criteria->compare('t.id', $this->id);
        $criteria->compare('t.ingredient_id', $this->post_id);
        $criteria->compare('t.content', $this->content);
        $criteria->compare('t.created_at', $this->created_at);
        
        return new CActiveDataProvider(get_class($this), array(
                    'criteria' => $criteria,
                    'sort' => array(
                        'defaultOrder' => 't.id ASC',
                    )
                ));
    }
    
    public static function getCommentsTree($ingredient_id, $childComments=false, $depth = 1){
        
        $comments = $childComments ? $childComments : self::model()->root_comments()->findAllByAttributes(['ingredient_id' => $ingredient_id]);
        
        $resultComments =[];
        foreach($comments as $comment){
                        
            $commentArray['id'] = $comment->id;
            $commentArray['text'] = $comment->content;
            $commentArray['created_at'] = $comment->fmt('created_at');
            $commentArray['username'] = $comment->user->username;
            
            if( !empty($comment->childComments) ){         
                
                $childCommentsTree = self::getCommentsTree(false, $comment->childComments, $depth - 1);
                
                if($depth > 0){     
                    
                    usort($childCommentsTree, function($a, $b){                    
                        if ($a['created_at'] == $b['created_at']) {
                            return 0;
                        }
                        return ($a['created_at'] < $b['created_at']) ? -1 : 1;
                    });
                    
                    $commentArray['children'] = $childCommentsTree;        
                }
                                                
            }
            
            $resultComments[] = $commentArray;
            unset($commentArray);
            
            if($depth <= 0 && !empty($childCommentsTree)){
                $resultComments = array_merge($resultComments, $childCommentsTree);
                unset($childCommentsTree);                
                
            }
            
        }      
        
        return $resultComments;
        
    }

}