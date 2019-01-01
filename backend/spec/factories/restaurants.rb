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

FactoryBot.define do
  factory :restaurant do
    name {Faker::Name.name}
    is_tenbis {Faker::Boolean}
    max_delivery_time {Faker::Number.number(3)}
    rating {Faker::Number.between(0, 3)}

    trait :hummus do
      name 'Hummus Ashkara'
    end

    trait :no_name do
      name nil
    end

  end
end
