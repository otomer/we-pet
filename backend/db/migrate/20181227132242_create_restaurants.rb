class CreateRestaurants < ActiveRecord::Migration[5.2]
  def up
    create_table :restaurants do |t|
      t.string :name, null: false, limit: 250 # Restaurant's Name
      t.decimal :rating, percision: 2 # Rating
      t.boolean :is_tenbis, default: false # Is 10bis T/F flag
      t.integer :max_delivery_time # Maximum delivery time
      t.timestamps

    end

    add_index :restaurants, :name
  end

  def down
    remove_index :restaurants, :name
    drop_table :restaurants
  end
end
