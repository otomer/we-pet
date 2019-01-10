module Api
  module V1
    class CuisinesController < ApplicationController
      before_action :set_cuisine, only: [:show, :update, :destroy]

      # GET /cuisines
      def index
        render json: Cuisine.byRestaurantsCount, status: :ok
      end

      # GET /cuisines/1
      def show
        if @cuisine
          render json: @cuisine, status: :ok
        else
          render status: :unprocessable_entity
        end
      end

      # POST /cuisines
      def create
        @cuisine = Cuisine.new(cuisine_params)
        if @cuisine.save
          render json: @cuisine, status: :created
        else
          render json: {errors: @cuisine.errors}, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /cuisines/1
      def update
        render json: {message: 'cuisine does not exist'}, status: :unprocessable_entity && return unless @cuisine
        render json: {message: 'cuisine was not updated', errors: @cuisine.errors}, status: :unprocessable_entity && return unless @cuisine.update(cuisine_params)
        render json: @cuisine, status: :ok

        # if @cuisine
        #   if @cuisine.update(cuisine_params)
        #     render json: @cuisine, status: :ok
        #   else
        #     render json: {message: 'cuisine was not updated', errors: @cuisine.errors}, status: :unprocessable_entity
        #   end
        # else
        #   render json: {message: 'cuisine does not exist'}, status: :unprocessable_entity
        # end
      end

      # DELETE /cuisines/1
      def destroy
        if @cuisine
          if @cuisine.destroy
            render json: @cuisine, status: :ok
          else
            render json: {message: 'cuisine was not deleted', errors: @cuisine.errors}, status: :unprocessable_entity
          end
        else
          render json: {message: 'cuisine does not exist'}, status: :unprocessable_entity
        end
      end

      private

      def set_cuisine
        @cuisine = Cuisine.find_by(:id => params[:id])
        render json: {message: 'cuisine does not exist'}, status: :unprocessable_entity && return unless @cuisine

      end

      def cuisine_params
        params.permit(:name)
      end
    end
  end
end