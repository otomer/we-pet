# == Schema Information
#
# Table name: parents
#
#  id         :bigint(8)        not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

RSpec.describe Parent, type: :model do
  before(:all) do
    @parent1 = create(:parent)
  end

  context 'association tests' do
    it { should have_many(:children) }
  end

  context 'validation tests' do
    it { should validate_presence_of(:name) }

    it 'has valid attributes' do
      expect(@parent1).to be_valid
    end

    it 'has a unique name' do
      parent2 = build(:parent)
      parent2.name = @parent1.name
      expect(parent2).to_not be_valid
    end
  end

end
