# backend: README

Steps necessary to get the application up and running

#### Prerequisites
* Ruby version: 2.3.7p456 (2018-03-28 revision 63024)

* Rails version:  5.2.2

* System dependencies: -

#### Configuration

##### Database initialization tasks

Note: running only the 1st task (api_reseed) is enough, it will simply setup everything.

1. Fetch data from api and reseed 

    `rake db:api_reseed`
    
2. Fetch data from api and output to json files
    
    `rake api:fetch`

3. Reset database and seed json data files

    `rake db:reseed`

4. Remigrate database

    `rake db:remigrate`
    
##### Swagger

- Browse: http://localhost:3001/api-docs/
- Api-docs can be generated (spec/integration files) using task:

    `rake rswag:specs:swaggerize` 


##### How to run the test suite

- Run all tests using:    `rspec spec/integrations`

- Only model tests:     `rspec spec/integrations`
    
- Only integration tests:    `rspec spec/integrations`


##### Integrations

- Testing:
    - [Shoulda Matchers](https://github.com/thoughtbot/shoulda-matchers) (one-liners tests)
    - [Faker](https://github.com/stympy/faker) (fake data generator)
    - [Annotate (aka AnnotateModels)](https://github.com/ctran/annotate_models) (auto annotate models)
    - [FactoryBot (aka FactoryGirl)](https://github.com/thoughtbot/factory_bot_rails) (creating test objects)
    - [SimpleCov](https://github.com/colszowka/simplecov) (code coverage analysis tool)
 
- REST (Backend) API 
    - [Rswag/Swagger](https://github.com/domaindrivendev/rswag) (used for documentation and integration tests)
    - [will_paginate](https://github.com/mislav/will_paginate) (used for restaurants paging)
    
- External APIs
    - [Faraday](https://github.com/lostisland/faraday) (HTTP client lib)
    
    
##### Services (job queues, cache servers, search engines, etc.)
TBD

##### Deployment instructions
TBD

    

