# == Schema Information
#
# Table name: reviews
#
#  id            :bigint(8)        not null, primary key
#  author        :string(50)       not null
#  comment       :text
#  rating        :float
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  restaurant_id :bigint(8)
#
# Indexes
#
#  index_reviews_on_restaurant_id  (restaurant_id)
#
# Foreign Keys
#
#  fk_rails_...  (restaurant_id => restaurants.id)
#

FactoryBot.define do
  factory :review do
    author {Faker::Name.name}
    comment {Faker::Lorem.sentence}
    rating {Faker::Number.between(0, 3)}

    restaurant {FactoryBot.create(:restaurant)}

    trait :high_rating do
      rating 3
    end

    trait :low_rating do
      rating 0
    end

    trait :no_rating do
      rating nil
    end

    trait :out_of_range_rating do
      rating 100
    end
  end
end
