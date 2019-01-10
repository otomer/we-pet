module Api
  module V1
    class LocationsController < ApplicationController
      before_action :set_location, only: [:show, :edit, :update, :destroy]
      before_action :set_restaurant, only: [:show, :update, :create]

      # GET /locations
      def index
        render json: Location.all, status: :ok
      end

      # GET /locations/1
      def show
        if @location
          render json: @location, status: :ok
        else
          render status: :unprocessable_entity
        end
      end

      # POST /locations
      def create
        @location = Location.new(location_params)
        @location.restaurant = @restaurant
        if @location.save
          render json: @location, status: :created
        else
          render json: {message: 'location was not saved', errors: @location.errors}, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /locations/1
      def update
        if @location
          if @location.update(location_params)
            render json: @location, status: :ok
          else
            render json: {message: 'location was not updated', errors: @location.errors}, status: :unprocessable_entity
          end
        else
          render json: {message: 'location does not exist'}, status: :unprocessable_entity
        end
      end

      # DELETE /locations/1
      def destroy
        if @location
          if @location.destroy
            render json: @location, status: :ok
          else
            render json: {message: 'location was not deleted', errors: @location.errors}, status: :unprocessable_entity
          end
        else
          render json: {message: 'location does not exist'}, status: :unprocessable_entity
        end
      end

      private

      def set_location
        @location = Location.find_by(:id => params[:id])
      end

      def set_restaurant
        @restaurant = Restaurant.find_by(:id => params[:restaurant_id])
      end

      def location_params
        params.permit(:address, :longitude, :latitude, :restaurant_id)
      end
    end
  end
end