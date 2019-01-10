class CreateReviews < ActiveRecord::Migration[5.2]
  def up
    create_table :reviews do |t|
      t.references :restaurant, foreign_key: true
      t.string :author, null: false, limit: 50    # Reviewer's name
      t.float :rating, percision: 2             # Review Rating
      t.text :comment, limit: 500                 # Comment
      t.timestamps
    end
  end

  def down
    drop_table :reviews
  end
end
