module Api
  module V1
    class ReviewsController < ApplicationController
      before_action :set_review, only: [:show, :update, :destroy]
      before_action :set_restaurant, only: [:new, :index, :create]

      # GET /restaurants/1/reviews
      def index
        render json: @restaurant.reviews, status: :ok
      end

      # GET /restaurants/1/reviews/2
      def show
        if @review
          render json: @review, status: :ok
        else
          render status: :unprocessable_entity
        end
      end

      # POST /reviews
      def create
        @review = @restaurant.reviews.new(review_params)
        if @review.save
          render json: {data: @review}, status: :created
        else
          render json: {message: 'review was not saved', errors: @review.errors}, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /reviews/1
      def update
        if @review
          if @review.update(review_params)
            render json: @review, status: :ok
          else
            render json: {message: 'review was not updated', errors: @review.errors}, status: :unprocessable_entity
          end
        else
          render json: {message: 'review does not exist'}, status: :unprocessable_entity
        end
      end

      # DELETE /restaurants/1/review/1
      def destroy
        if @review
          if @review.destroy
            render json: @review, status: :ok
          else
            render json: {message: 'review was not deleted', errors: @review.errors}, status: :unprocessable_entity
          end
        else
          render json: {message: 'review does not exist'}, status: :unprocessable_entity
        end

      end

      private

      def set_review
        @review = Review.find_by(:id => params[:id])
      end

      def set_restaurant
        @restaurant = Restaurant.find(params[:restaurant_id])
      end

      def review_params
        params.permit(:author, :comment, :rating)
      end
    end
  end
end
