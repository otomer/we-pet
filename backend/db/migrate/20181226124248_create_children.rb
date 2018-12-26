class CreateChildren < ActiveRecord::Migration[5.2]
  def up
    create_table :children do |t|
      t.string :name
      t.references :parent, foreign_key: true

      t.timestamps
    end
  end

  def down
    drop_table :children
  end
end
