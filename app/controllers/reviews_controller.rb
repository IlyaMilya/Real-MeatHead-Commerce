class ReviewsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :review_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_record

    def index
        reviews = Review.all
        render json: reviews
    end

    def show
        review = Review.find(params[:id])
        render json: review
    end

    def create
        review = Review.create!(review_params)
        render json: review, status: :created
    end

    def update
        review = Review.find(params[:id])
        review.update!(review_params)
        render json: review
    end

    def destroy
        review = Review.find(params[:id])
        review.destroy
        head :no_content
    end

    private

    def review_params
        params.permit(:description)
    end

    def review_not_found
        render json: {error: "Review not found"}, status: :not_found
    end

    def invalid_record(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end

end
