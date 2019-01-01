# == Schema Information
#
# Table name: restaurants
#
#  id                :bigint(8)        not null, primary key
#  is_tenbis         :boolean          default(FALSE)
#  max_delivery_time :integer
#  name              :string(250)      not null
#  rating            :decimal(, )
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
# Indexes
#
#  index_restaurants_on_name  (name)
#

class Restaurant < ApplicationRecord
  has_many :restaurant_cuisines
  has_many :cuisines, through: :restaurant_cuisines, dependent: :destroy
  has_many :reviews, dependent: :destroy
  has_one :location, dependent: :destroy
  validates :name, presence: true
  validates :rating, numericality: {greater_than_or_equal_to: 0, less_than_or_equal_to: 3}

  # Rating
  def rating
    if reviews.present?
      reviews.average(:rating)
    else
      0
    end
  end

  def no_rating
    reviews.reject {|r| r.rating.present?}
  end

  def has_rating
    reviews.reject {|r| r.rating.blank?}
  end
end
