class CreateParents < ActiveRecord::Migration[5.2]
  def up
    create_table :parents do |t|
      t.string :name

      t.timestamps
    end
  end

  def down
    drop_table :parents
  end
end
