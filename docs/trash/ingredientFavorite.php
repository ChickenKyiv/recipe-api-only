<?php

/**
 * @property int $id
 * @property int $user_id
 * @property int $ingredient_id
 * @property string $created_at
 */
class IngredientFavorite extends PActiveRecord {



    public function tableName() {
        return '{{ingredient_favorites}}';
    }

    public function behaviors() {
        return array(
            'CTimestampBehavior' => [
                'class' => 'zii.behaviors.CTimestampBehavior',
                'createAttribute' => 'created_at',
//                'updateAttribute' => 'updated_at',
//                'setUpdateOnCreate' => false,
            ],
//            'CapturePostBehavior' => [
//                'class' => 'ext.project.behaviors.CapturePostBehavior',
//                ],
        );
    }


}
