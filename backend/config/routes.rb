Rails.application.routes.draw do
  # Sidekiq
  require 'sidekiq/web'
  require 'sidekiq/cron/web'
  mount Sidekiq::Web => '/sidekiq'

  # Swagger
  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'
  namespace :api, defaults: {format: :json} do
    namespace :v1 do

      # api/v1/restaurants/?
      resources :restaurants, except: [:new, :edit] do
        # api/v1/restaurants/1?/reviews/2?
        resources :reviews, except: [:new, :edit]
      end

      # api/v1/cuisines/?
      resources :cuisines, except: [:new, :edit]

      # api/v1/locations/?
      resources :locations, except: [:new, :edit]
    end
  end
end

