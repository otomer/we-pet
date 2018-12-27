# == Schema Information
#
# Table name: children
#
#  id         :bigint(8)        not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  parent_id  :bigint(8)
#
# Indexes
#
#  index_children_on_parent_id  (parent_id)
#
# Foreign Keys
#
#  fk_rails_...  (parent_id => parents.id)
#

require 'rails_helper'

RSpec.describe Child, type: :model do
  context 'validation tests' do

    it { should belong_to(:parent) }


    it 'fails to create when name is missing' do
      child = Child.new().save
      expect(child).to eq(false)
    end

    it 'should save successfully' do
      #child = Child.new(name: 'Boosh').save!
      parent = Parent.new(name: 'Test')
      child = Child.new(name: 'Boosh', parent: parent)
      #byebug
      expect(child.validate).to eq(true)
    end
  end

  context 'scope tests' do

  end
end
