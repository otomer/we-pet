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

FactoryBot.define do
  factory :location do
    address {Faker::Address.full_address}
    latitude {Faker::Number.decimal(2, 3)}
    longitude {Faker::Number.decimal(2, 3)}

    association :restaurant, factory: :restaurant

    trait :tel_aviv do
      address 'Menachem Begin 144, Tel Aviv, Israel'
      longitude '0.1'
      latitude '0.1'
    end

    trait :no_address do
      address nil
    end
  end
end
