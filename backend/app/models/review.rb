# == Schema Information
#
# Table name: reviews
#
#  id            :bigint(8)        not null, primary key
#  author        :string(50)       not null
#  comment       :text
#  rating        :decimal(, )
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  restaurant_id :bigint(8)
#
# Indexes
#
#  index_reviews_on_restaurant_id  (restaurant_id)
#
# Foreign Keys
#
#  fk_rails_...  (restaurant_id => restaurants.id)
#

class Review < ApplicationRecord
  belongs_to :restaurant
  validates :author, :rating, presence: true
  validates :rating, numericality: {greater_than_or_equal_to: 0, less_than_or_equal_to: 3}
  attribute :author, :string, default: 'Anonymous'
end
