# == Schema Information
#
# Table name: cuisines
#
#  id   :bigint(8)        not null, primary key
#  name :string           not null
#

require 'rails_helper'

RSpec.describe Cuisine, type: :model do
  let(:hummus_cuisine) {create(:cuisine, :hummus)}

  describe 'validations' do
    it {should validate_presence_of(:name)}
  end

  describe 'assosications' do
    it {should have_many(:restaurants)}
  end

  describe 'invalid input (non unique name)' do
    it 'should raise error for non unique name' do
      expect {create(:cuisine, name: hummus_cuisine.name)}.to raise_error(/Name has already been taken/)
    end
  end

  describe 'invalid input (empty name)' do
    let(:invalid_cuisine) {create(:cuisine, :no_name)}
    it 'should raise error for missing name' do
      expect {create(:cuisine, name: invalid_cuisine.name)}.to raise_error(/Name can't be blank/)
    end
  end

  describe 'valid input' do
    it 'should created valid cuisine' do
      expect(hummus_cuisine).to be_truthy
    end
  end
end
