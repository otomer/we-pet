# == Schema Information
#
# Table name: cuisines
#
#  id   :bigint(8)        not null, primary key
#  name :string           not null
#

FactoryBot.define do
  factory :cuisine do
    name {Faker::Name.name}
  end

  trait :no_name do
    name nil
  end

  trait :hummus do
    name 'Hummus'
  end
end
