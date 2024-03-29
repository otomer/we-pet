# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_12_30_073804) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cuisines", force: :cascade do |t|
    t.string "name", null: false
  end

  create_table "locations", force: :cascade do |t|
    t.bigint "restaurant_id"
    t.string "address", null: false
    t.string "longitude"
    t.string "latitude"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["restaurant_id"], name: "index_locations_on_restaurant_id", unique: true
  end

  create_table "restaurant_cuisines", id: false, force: :cascade do |t|
    t.bigint "cuisine_id"
    t.bigint "restaurant_id"
    t.index ["cuisine_id"], name: "index_restaurant_cuisines_on_cuisine_id"
    t.index ["restaurant_id"], name: "index_restaurant_cuisines_on_restaurant_id"
  end

  create_table "restaurants", force: :cascade do |t|
    t.string "name", limit: 250, null: false
    t.float "rating_avg"
    t.boolean "is_tenbis", default: false
    t.integer "max_delivery_time"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_restaurants_on_name"
  end

  create_table "reviews", force: :cascade do |t|
    t.bigint "restaurant_id"
    t.string "author", limit: 50, null: false
    t.float "rating"
    t.text "comment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["restaurant_id"], name: "index_reviews_on_restaurant_id"
  end

  add_foreign_key "locations", "restaurants"
  add_foreign_key "restaurant_cuisines", "cuisines"
  add_foreign_key "restaurant_cuisines", "restaurants"
  add_foreign_key "reviews", "restaurants"
end
