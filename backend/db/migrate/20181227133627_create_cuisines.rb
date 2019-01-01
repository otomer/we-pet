class CreateCuisines < ActiveRecord::Migration[5.2]
  def up
    create_table :cuisines do |t|
      t.string :name, null: false # Cuisine's name
    end
  end

  def down
    drop_table :cuisines
  end
end
