# == Schema Information
#
# Table name: reviews
#
#  id            :bigint(8)        not null, primary key
#  author        :string(50)       not null
#  comment       :text
#  rating        :float
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

require 'rails_helper'

RSpec.describe Review, type: :model do

  describe 'validations' do
    it {should validate_presence_of(:author)}
    it {should validate_numericality_of(:rating)}
  end

  describe 'associations' do
    it {should belong_to(:restaurant)}
  end

  describe 'valid input' do
    it 'should create a valid review' do
      expect(FactoryBot.create(:review)).to be_truthy
    end
  end

  describe 'invalid input (no rating)' do
    it 'should raise error for missing rating' do
      expect {FactoryBot.create(:review, :no_rating)}
          .to raise_error(/Rating can't be blank/)
    end
  end

  describe 'invalid input (out of range rating)' do
    it 'should raise error for out of range rating' do
      expect {FactoryBot.create(:review, :out_of_range_rating)}
          .to raise_error(/Rating must be less than or equal to 3/)
    end
  end
end

