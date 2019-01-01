def parse_json_file(file_name)
  full_path = "#{Constants::OUTPUT_PATH}#{file_name}"
  puts "Parsing #{full_path}..."
  File.open(full_path) do |f|
    JSON.parse(f.read)
  end
end

def seed_cuisines(file_name)
  cuisines_array = []
  parse_json_file(file_name)['cuisines'].each do |c|
    cuisines_array << {
        :name => c['cuisine']['cuisine_name']
    }
  end
  Cuisine.create!(cuisines_array)
  puts " -> Seeded cuisines.".green
end

def seed_restaurants(file_name)
  restaurants_array = []
  parse_json_file(file_name)['restaurants'].each do |restaurant|
    rest = restaurant['restaurant']
    restaurants_array << {
        :name => rest['name'],
        :location => Location.new(:address => rest['location']['address'],
                                  :latitude => rest['location']['latitude'],
                                  :longitude => rest['location']['longitude']),
        :is_tenbis => rand < 0.5,
        :max_delivery_time => rand(10...500),
        :cuisines => Cuisine.all.shuffle.take(rand(1..3))
    }
  end

  Restaurant.create!(restaurants_array)
  puts " -> Seeded restaurants.".green
end

def seed_reviews(file_name)
  reviews_array = []
  parse_json_file(file_name)['reviews'].each do |review|
    rev = review['review']
    reviews_array << {
        :author => rev['user']['name'],
        :rating => rand(1..3).to_d,
        :comment => rev['review_text'],
        :restaurant => Restaurant.offset(rand(Restaurant.count)).first
    }
  end

  Review.create!(reviews_array)
  puts " -> Seeded reviews.".green
end

seed_cuisines(Constants::CUISINES_FILENAME)
seed_restaurants(Constants::RESTAURANTS_FILENAME)
seed_reviews(Constants::REVIEWS_FILENAME)
puts "________________________".green
puts "✓ Database Seed is Done.".green