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

FactoryBot.define do
  factory :child, class: Child do
    name      { Faker::Name.name }
  end
end