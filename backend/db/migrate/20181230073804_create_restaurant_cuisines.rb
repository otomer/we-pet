class CreateRestaurantCuisines < ActiveRecord::Migration[5.2]

  def up
    create_table :restaurant_cuisines, id: false do |t|
      t.belongs_to :cuisine, index: true, foreign_key: true
      t.belongs_to :restaurant, index: true, foreign_key: true
    end
  end

  def down
    drop_table :restaurant_cuisines
  end
end
