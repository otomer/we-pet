# == Schema Information
#
# Table name: nodes
#
#  id         :bigint(8)        not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

RSpec.describe Node, type: :model do
  context 'validation tests' do
    it 'ensures name presence' do
      node = Node.new().save
      expect(node).to eq(false)
    end

    it 'should save successfully' do
      node = Node.new(name: 'Joo').save
      expect(node).to eq(true)
    end
  end

  context 'scope tests' do

  end
end
