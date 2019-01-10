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

require 'rails_helper'

RSpec.describe Location, type: :model do
  let(:restaurant) {FactoryBot.create(:restaurant, location: FactoryBot.create(:location, :tel_aviv))}

  describe 'validations' do
    it {should validate_presence_of(:address)}
  end

  describe 'assosications' do
    it {should belong_to(:restaurant)}
  end

  describe 'invalid input (no address)' do
    let(:invalid_location) {FactoryBot.create(:location, :no_address)}
    it 'should raise error for missing address' do
      expect {FactoryBot.create(:location, address: invalid_location.address)}.to raise_error(/Address can't be blank/)
    end
  end

  describe 'valid input' do
    it 'should create a valid location' do
      expect(restaurant.location).to be_truthy
    end
  end
end
