module Api
  module V1
    class RestaurantsController < ApplicationController
      before_action :set_restaurant, only: [:show, :update, :destroy]

      # GET /restaurants
      def index
        page = params[:page] ? params[:page].to_i : 1
        per_page = 6

        @restaurants = Restaurant.paginate(:page => page, :per_page => per_page)

        total_count = Restaurant.all.size
        from = (page - 1) * per_page
        pager = {
            page: page,
            from: from,
            to: from + @restaurants.length,
            per_page: per_page,
            total_count: total_count,
            total_pages: (total_count / per_page) + 1
        }

        render json: {count: @restaurants.length, pager: pager, restaurants: @restaurants}, status: :ok, include: [:reviews, :location]
      end

      # GET /restaurant/1
      def show
        if @restaurant
          render json: @restaurant, status: :ok, include: [:location, :reviews]
        else
          render status: :unprocessable_entity
        end
      end

      # POST /restaurants
      def create
        @restaurant = Restaurant.new(restaurant_params)
        if @restaurant.save
          render json: @restaurant, status: :created
        else
          render json: {errors: @restaurant.errors}, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /restaurants/1
      def update
        if @restaurant
          if @restaurant.update(restaurant_params)
            render json: @restaurant, status: :ok
          else
            render json: {message: 'restaurant was not updated', errors: @restaurant.errors}, status: :unprocessable_entity
          end
        else
          render json: {message: 'restaurant does not exist'}, status: :unprocessable_entity
        end
      end

      # DELETE /restaurants/1
      def destroy
        if @restaurant
          if @restaurant.destroy
            render json: @restaurant, status: :ok
          else
            render json: {message: 'restaurant was not deleted', errors: @restaurant.errors}, status: :unprocessable_entity
          end
        else
          render json: {message: 'restaurant does not exist'}, status: :unprocessable_entity
        end
      end

      private

      def set_restaurant
        @restaurant = Restaurant.find_by(:id => params[:id])
      end

      def restaurant_params
        params.permit(:name, :is_tenbis, :max_delivery_time)
      end
    end

  end
end
