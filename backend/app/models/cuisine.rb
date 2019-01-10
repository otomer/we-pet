# == Schema Information
#
# Table name: cuisines
#
#  id   :bigint(8)        not null, primary key
#  name :string           not null
#

class Cuisine < ApplicationRecord
  has_many :restaurant_cuisines
  has_many :restaurants, through: :restaurant_cuisines, dependent: :destroy
  validates :name, presence: true
  validates :name, uniqueness: true

  scope :byRestaurantsCount, -> {left_joins(:restaurants)
                           .group(:id)
                           .order('COUNT(restaurants.id) DESC')}
end
