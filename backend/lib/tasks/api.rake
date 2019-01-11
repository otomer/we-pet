namespace :api do
  task fetch: :environment do
    # Request params
    @city_id = 280 # New York City ID in Zomato's API
    @restaurants_count = 200 # The amount of restaurants to request from Zomato's API
    @reviewed_restaurants_count = 100 # The amount of reviews to be requested from Zomato's API

    # Init connection object
    @restaurants_array = []
    @restaurants_names_array = []
    @connection = Faraday.new(:url => Constants::API_BASE_URL, :headers => {'user-key' => Constants::API_TOKEN,
                                                                            'Accept' => 'application/json'}) do |c|
      c.use Faraday::Request::UrlEncoded
      if Constants::API_ENABLE_LOG
        c.use Faraday::Response::Logger
      end
      c.use Faraday::Adapter::NetHttp
    end

    def save_json(json, file_name)
      full_path = "#{Constants::OUTPUT_PATH}#{file_name}"
      File.open(full_path, 'w') do |f|
        f.write(JSON.pretty_generate(json))
        puts " -> File saved: #{full_path}".green
      end
    end

    def api_fetch(endpoint, params)
      response = @connection.get endpoint, params
      ActiveSupport::JSON.decode(response.body)
    end

    # Get all cuisines in a given city
    def fetch_cuisines
      puts "Fetching cuisines for city #{@city_id}..."
      save_json(api_fetch('cuisines', {:city_id => @city_id}), Constants::CUISINES_FILENAME)
    end

    # Get limited amount of restaurants
    def fetch_restaurants
      puts "Fetching #{@restaurants_count} restaurants..."
      pages = @restaurants_count / 20 #Since api is limited to 20, calculate the number of required requests
      puts "Since api results are limited to 20 each time, will request #{pages.to_s} times"
      restaurants_responses = []
      pages.times do |i|
        start_index = i * 20
        restaurants_responses << api_fetch('search', {:start => start_index})
      end

      counter = 0
      restaurants_responses.each_with_index do |restaurants_response, index|
        restaurants_response['restaurants'].each do |restaurant|
          res_id = restaurant['restaurant']['R']['res_id']

          if @restaurants_names_array.include?(res_id)
          # Ignore
          else
            counter = counter + 1
            @restaurants_array << restaurant
            @restaurants_names_array << res_id
          end

        end
      end

      save_json({:restaurants => @restaurants_array}, Constants::RESTAURANTS_FILENAME)
    end

    # Get limited amount of reviews, by restaurant ids
    def fetch_reviews
      puts "Fetching reviews for #{@reviewed_restaurants_count} restaurants..."
      rest_ids = []
      @restaurants_array.sample(@reviewed_restaurants_count).each do |restaurant|
        rest_ids << restaurant['restaurant']['R']['res_id']
      end

      reviews_responses = []
      rest_ids.each do |restaurant_id|
        reviews_responses << api_fetch('reviews', {:res_id => restaurant_id})
      end

      reviews_array = []
      reviews_responses.each do |reviews_response|
        reviews_response['user_reviews'].each do |review|
          reviews_array << review
        end
      end

      save_json({:reviews => reviews_array}, Constants::REVIEWS_FILENAME)
    end

    fetch_cuisines
    fetch_restaurants
    fetch_reviews
    puts "___________________________".green
    puts "✓ API Data Fetching is Done".green
  end
end