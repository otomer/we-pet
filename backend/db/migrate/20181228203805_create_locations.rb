class CreateLocations < ActiveRecord::Migration[5.2]
  def up
    create_table :locations do |t|
      t.references :restaurant, index: {unique: true}, foreign_key: true
      t.string :address, null: false # Address
      t.string :longitude # Longitude coordinate
      t.string :latitude # Latitude coordinate
      t.timestamps
    end
  end

  def down

    drop_table :locations
  end
end
