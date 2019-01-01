require 'swagger_helper'

describe 'Locations API' do

  path '/api/v1/locations' do
    get 'Get all locations' do
      tags 'Locations'
      consumes 'application/json'

      response '200', 'retrieved' do
        run_test!
      end
    end

    post 'Creates a location' do
      tags 'Locations'
      consumes 'application/json'
      parameter name: :location, in: :body, schema: {
          type: :object,
          properties: {
              address: {type: :string},
              longitude: {type: :string},
              latitude: {type: :string},
              restaurant_id: {type: :integer}
          },
          required: ['address']
      }

      response '201', 'created' do
        let(:location) {{address: 'abc', longitude: '0.00', latitude: '0.00', restaurant_id: FactoryBot.create(:restaurant).id}}

        run_test!
      end

      response '422', 'invalid request (no address)' do
        let(:location) {{address: ''}}
        run_test!
      end
    end
  end

  path '/api/v1/locations/{id}' do

    get 'Retrieves a location' do
      tags 'Locations'
      produces 'application/json'
      parameter name: :id, :in => :path, :type => :string, :description => 'Location ID'

      response '200', 'retrieved' do
        let(:id) {FactoryBot.create(:location).id}
        run_test!
      end

      response '422', 'invalid request (id)' do
        let(:id) {'invalid'}
        run_test!
      end
    end

    put 'Updates a location' do
      tags 'Locations'
      produces 'application/json'
      parameter name: :id, :in => :path, :type => :string, :description => 'Location ID'
      parameter name: :location, in: :body, schema: {
          type: :object,
          properties: {
              address: {type: :string},
              longitude: {type: :string},
              latitude: {type: :string}
          }
      }

      response '200', 'updated' do
        let(:id) {FactoryBot.create(:location, restaurant_id: FactoryBot.create(:restaurant).id).id}
        let(:location) {FactoryBot.create(:location, id: id)}
        run_test!
      end

      response '422', 'invalid request (id)' do
        let(:id) {'invalid'}
        run_test!
      end
    end

    delete 'Delete a location' do
      let(:restaurant_id) {FactoryBot.create(:restaurant).id}

      tags 'Locations'
      produces 'application/json'
      parameter name: :id, :in => :path, :type => :string, :description => 'Location ID'

      response '200', 'deleted' do
        let(:id) {FactoryBot.create(:location, restaurant_id: restaurant_id).id}
        run_test!
      end

      response '422', 'invalid request (id)' do
        let(:id) {'invalid'}
        run_test!
      end
    end

  end
end
