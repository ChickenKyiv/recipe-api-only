<?php

/**
 * @property int $id 
 * @property int $user_id
 * @property int $ingredient_id
 * @property int $rating
 * @property string $created_at
 */
class IngredientRating extends PActiveRecord {

    /**
     * Returns the static model of the specified AR class.
     * @param string $className active record class name.
     * @return Course the static model class
     */
    public static function model($className = __CLASS__) {
        return parent::model($className);
    }

    public function tableName() {
        return '{{ingredient_ratings}}';
    }

    public function behaviors() {
        return array(
            'CTimestampBehavior' => [
                'class' => 'zii.behaviors.CTimestampBehavior',
                'createAttribute' => 'created_at',
                'updateAttribute' => 'updated_at',
                'setUpdateOnCreate' => false,
            ],
//            'CapturePostBehavior' => [
//                'class' => 'ext.project.behaviors.CapturePostBehavior',
//                ],
        );
    }

//    public function attributeLabels() {
//        return [
//            
//        ];
//    }

//    public function rules() {
//        return [
//        ];
//    }

}