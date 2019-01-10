require 'swagger_helper'

describe 'Cuisines API' do

  path '/api/v1/cuisines' do
    get 'Get all cuisines' do
      tags 'Cuisines'
      consumes 'application/json'

      response '200', 'retrieved' do
        run_test!
      end
    end

    post 'Creates a cuisine' do
      tags 'Cuisines'
      consumes 'application/json'
      parameter name: :cuisine, in: :body, schema: {
          type: :object,
          properties: {
              name: {type: :string}
          }
      }

      response '201', 'created' do
        let(:cuisine) {{name: 'Israeli'}}
        run_test!
      end

      response '422', 'invalid request (no name)' do
        let(:cuisine) {{name: ''}}
        run_test!
      end
    end
  end

  path '/api/v1/cuisines/{id}' do

    get 'Retrieves a cuisine' do
      tags 'Cuisines'
      produces 'application/json'
      parameter name: :id, :in => :path, :type => :string, :description => 'Cuisine ID'

      response '200', 'retrieved' do
        let(:id) {FactoryBot.create(:cuisine).id}
        run_test!
      end

      response '422', 'invalid request (id)' do
        let(:id) {'invalid'}
        run_test!
      end
    end

    put 'Updates a cuisine' do
      tags 'Cuisines'
      produces 'application/json'
      parameter name: :id, :in => :path, :type => :string, :description => 'Cuisine ID'
      parameter name: :cuisine, in: :body, schema: {
          type: :object,
          properties: {
              name: {type: :string}
          }
      }

      response '200', 'updated' do
        let(:id) {FactoryBot.create(:cuisine).id}
        let(:cuisine) {{id: id, name: 'B'}}
        run_test!
      end

      response '422', 'invalid request (id)' do
        let(:id) {'invalid'}
        let(:cuisine) {{name: 'Test'}}
        run_test!
      end
    end

    delete 'Delete a cuisine' do
      tags 'Cuisines'
      produces 'application/json'
      parameter name: :id, :in => :path, :type => :string, :description => 'Cuisine ID'

      response '200', 'deleted' do
        let(:id) {FactoryBot.create(:cuisine).id}
        run_test!
      end

      response '422', 'invalid request (id)' do
        let(:id) {'invalid'}
        run_test!
      end
    end

  end
end
