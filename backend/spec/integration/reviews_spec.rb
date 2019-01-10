require 'swagger_helper'

describe 'Reviews API' do

  path '/api/v1/restaurants/{restaurant_id}/reviews' do
    get 'Get all reviews' do
      tags 'Reviews'
      consumes 'application/json'
      parameter name: :restaurant_id, :in => :path, :type => :string, :description => 'Restaurant ID'

      response '200', 'retrieved' do
        let(:restaurant_id) {FactoryBot.create(:restaurant).id}
        run_test!
      end
    end

    post 'Creates a review' do
      tags 'Reviews'
      consumes 'application/json'
      parameter name: :restaurant_id, :in => :path, :type => :string, :description => 'Restaurant ID'
      parameter name: :review, in: :body, schema: {
          type: :object,
          properties: {
              author: {type: :string},
              rating: {type: :integer},
              comment: {type: :string},
              restaurant_id: {type: :integer}
          },
          required: ['address']
      }

      response '201', 'created' do
        let(:restaurant_id) {FactoryBot.create(:restaurant).id}
        let(:review) {{author: 'Tomer', comment: 'Great', rating: 3, restaurant_id: restaurant_id}}

        run_test!
      end

      response '422', 'invalid request (no author)' do
        let(:restaurant_id) {FactoryBot.create(:restaurant).id}
        let(:review) {{author: '', restaurant_id: restaurant_id}}
        run_test!
      end
    end
  end

  path '/api/v1/restaurants/{restaurant_id}/reviews/{id}' do

    get 'Retrieves a review for a restaurant' do
      tags 'Reviews'
      produces 'application/json'
      parameter name: :id, :in => :path, :type => :string, :description => 'Review ID'
      parameter name: :restaurant_id, :in => :path, :type => :string, :description => 'Restaurant ID'

      response '200', 'retrieved' do
        let(:restaurant_id) {FactoryBot.create(:restaurant).id}
        let(:id) {FactoryBot.create(:review, restaurant_id: restaurant_id).id}
        run_test!
      end

      response '422', 'invalid request (id)' do
        let(:restaurant_id) {FactoryBot.create(:restaurant).id}
        let(:id) {'invalid'}
        run_test!
      end

      response '422', 'invalid request (restaurant_id)' do
        let(:restaurant_id) {'invalid'}
        let(:id) {'invalid'}
        run_test!
      end
    end


  end

  path '/api/v1/restaurants/{restaurant_id}/reviews/{id}' do
    put 'Updates a review' do
      tags 'Reviews'
      produces 'application/json'
      parameter name: :id, :in => :path, :type => :string, :description => 'Review ID'
      parameter name: :restaurant_id, :in => :path, :type => :string, :description => 'Restaurant ID'
      parameter name: :review, in: :body, schema: {
          type: :object,
          properties: {
              author: {type: :string},
              rating: {type: :decimal},
              comment: {type: :text},
              # restaurant_id: {type: :integer}
          }
      }

      response '200', 'updated' do
        let(:restaurant_id) {FactoryBot.create(:restaurant).id}
        let(:id) {FactoryBot.create(:review, restaurant_id: restaurant_id).id}
        let(:review) {FactoryBot.create(:review, id: id, restaurant_id: restaurant_id)}
        run_test!
      end

      response '422', 'invalid request (id)' do
        let(:restaurant_id) {FactoryBot.create(:restaurant).id}
        let(:id) {'invalid'}
        run_test!
      end
    end

    delete 'Delete a review' do
      let(:restaurant_id) {FactoryBot.create(:restaurant).id}

      tags 'Reviews'
      produces 'application/json'
      parameter name: :id, :in => :path, :type => :string, :description => 'Review ID'
      parameter name: :restaurant_id, :in => :path, :type => :string, :description => 'Restaurant ID'

      response '200', 'deleted' do
        let(:id) {FactoryBot.create(:review, restaurant_id: restaurant_id).id}
        run_test!
      end

      response '422', 'invalid request (id)' do
        let(:id) {'invalid'}
        run_test!
      end
    end
  end
end
