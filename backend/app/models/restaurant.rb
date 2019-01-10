# == Schema Information
#
# Table name: restaurants
#
#  id                :bigint(8)        not null, primary key
#  is_tenbis         :boolean          default(FALSE)
#  max_delivery_time :integer
#  name              :string(250)      not null
#  rating_avg        :float
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
# Indexes
#
#  index_restaurants_on_name  (name)
#
require 'rake'

class Restaurant < ApplicationRecord
  include Filterable

  has_many :restaurant_cuisines
  has_many :cuisines, through: :restaurant_cuisines, dependent: :destroy
  has_many :reviews, dependent: :destroy
  has_one :location, dependent: :destroy
  validates :name, presence: true
  validates :rating_avg, numericality: {greater_than_or_equal_to: 0, less_than_or_equal_to: 3}

  after_initialize :initialize_rating_avg

  def initialize_rating_avg
    if reviews.present?
      self.rating_avg = reviews.average(:rating)
    else
      self.rating_avg = 0
    end
    save
  end

  def self.run_take(task_name)
    load File.join(RAILS_ROOT, 'lib', 'tasks', 'db')
    Rake::Task[task_name].invoke
  end

  # Scoped filters
  scope :q_name, -> (val) {where("lower(restaurants.name) like ?", "%#{val.downcase}%")}
  scope :q_is_tenbis, -> (val) {where is_tenbis: val}
  scope :q_max_delivery_time, ->(val) {where('max_delivery_time <= ?', val)}
  scope :q_min_rating_avg, ->(val) {where('rating_avg >= ? ', val.to_i)}
  scope :q_cuisine, ->(val) {joins(:cuisines).where(cuisines: { id: val }) }
end
