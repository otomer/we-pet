require 'swagger_helper'

describe 'Restaurants API' do

  path '/api/v1/restaurants' do

    get 'Get all/filtered restaurants' do
      tags 'Restaurants'
      consumes 'application/json'
      parameter name: :q_name, :in => :params, :type => :string, :description => 'Restaurant filter name'
      parameter name: :q_max_delivery_time, :in => :params, :integer => :string, :description => 'Restaurant filter max delivery time'
      parameter name: :q_is_tenbis, :in => :params, :type => :boolean, :description => 'Restaurant filter is tenbis'
      parameter name: :q_min_rating_avg, :in => :params, :type => :integer, :description => 'Restaurant filter min rating avg'

      let(:r1) {FactoryBot.create(:restaurant, is_tenbis: true, max_delivery_time: 1)}
      let(:r2) {FactoryBot.create(:restaurant, :hummus, is_tenbis: false)}

      response '200', 'retrieved' do
        run_test!
      end

      response '200', 'retrieved (filtered by name)' do
        let(:q_name) {r2.name}
        run_test!
      end

      response '200', 'retrieved (filtered by is_tenbis)' do
        let(:q_is_tenbis) {r1.is_tenbis}
        run_test!
      end
    end

    post 'Creates a restaurant' do
      tags 'Restaurants'
      consumes 'application/json'
      parameter name: :restaurant, in: :body, schema: {
          type: :object,
          properties: {
              name: {type: :string},
              is_tenbis: {type: :boolean},
              max_delivery_time: {type: :integer}
          },
          required: ['name']
      }

      response '201', 'created' do
        let(:restaurant) {{name: 'Israeli', is_tenbis: true, max_delivery_time: 50}}
        run_test!
      end

      response '422', 'invalid request (no name)' do
        let(:restaurant) {{name: ''}}
        run_test!
      end
    end
  end

  path '/api/v1/restaurants/{id}' do

    get 'Retrieves a restaurant' do
      tags 'Restaurants'
      produces 'application/json'
      parameter name: :id, :in => :path, :type => :string, :description => 'Restaurant ID'

      response '200', 'retrieved' do
        let(:id) {FactoryBot.create(:restaurant).id}
        run_test!
      end

      response '422', 'invalid request (id)' do
        let(:id) {'invalid'}
        run_test!
      end
    end

    put 'Updates a restaurant' do
      tags 'Restaurants'
      produces 'application/json'
      parameter name: :id, :in => :path, :type => :string, :description => 'Restaurant ID'

      parameter name: :restaurant, in: :body, schema: {
          type: :object,
          properties: {
              name: {type: :string},
              is_tenbis: {type: :boolean},
              max_delivery_time: {type: :integer}
          },
          required: ['name']
      }

      response '200', 'updated' do
        let(:id) {FactoryBot.create(:restaurant).id}
        let(:restaurant) {{id: id, name: 'B', max_delivery_time: 5, is_tenbis: true}}
        run_test!
      end

      response '422', 'invalid request (id)' do
        let(:id) {'invalid'}
        let(:restaurant) {{id: id, name: 'Test', max_delivery_time: 5, is_tenbis: true}}
        run_test!
      end
    end

    delete 'Delete a restaurant' do
      tags 'Restaurants'
      produces 'application/json', 'application/xml'
      parameter name: :id, :in => :path, :type => :string, :description => 'Restaurant ID'

      response '200', 'deleted' do
        let(:id) {FactoryBot.create(:restaurant).id}
        run_test!
      end

      response '422', 'invalid request (id)' do
        let(:id) {'invalid'}
        run_test!
      end
    end

  end
end
