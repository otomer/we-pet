module Filterable
  extend ActiveSupport::Concern
  # https://www.justinweiss.com/articles/search-and-filter-rails-models-without-bloating-your-controller/
  #
  module ClassMethods
    def filter(filtering_params)
      results = self.where(nil)
      # Iterating the list of the param names that can be used for filtering
      filtering_params.each do |key, value|
        results = results.public_send(key, value) if value.present?
      end
      results
    end
  end
end