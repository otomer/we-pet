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

require 'rails_helper'

RSpec.describe Restaurant, type: :model do

  describe 'validations' do
    it {should validate_presence_of(:name)}
    it {should validate_numericality_of(:rating)}
  end

  describe 'associations' do
    it {should have_many(:cuisines)}
    it {should have_many(:reviews)}
    it {should have_one(:location)}
  end

  describe 'valid input' do
    it 'should create a valid restaurant' do
      expect(FactoryBot.create(:restaurant, :hummus)).to be_truthy
    end
  end

  describe 'invalid input (no name)' do
    it 'should raise error for missing name' do
      expect {FactoryBot.create(:restaurant, :no_name)}
          .to raise_error(/Name can't be blank/)
    end
  end
end