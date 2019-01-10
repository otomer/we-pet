# == Schema Information
#
# Table name: locations
#
#  id            :bigint(8)        not null, primary key
#  address       :string           not null
#  latitude      :string
#  longitude     :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  restaurant_id :bigint(8)
#
# Indexes
#
#  index_locations_on_restaurant_id  (restaurant_id) UNIQUE
#
# Foreign Keys
#
#  fk_rails_...  (restaurant_id => restaurants.id)
#

class Location < ApplicationRecord
  belongs_to :restaurant
  validates :address, presence: true
end
