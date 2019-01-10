# weTasty / BackEnd

Steps necessary to get the application up and running

#### Prerequisites
* Ruby version: 2.3.7p456 (2018-03-28 revision 63024)
* Rails version:  5.2.2
---
### Server start
    rails s -p 3001
---
#### Database 
Using PostgreSQL v.11
    
Generated with <img src="https://camo.githubusercontent.com/456fc398063f4b75ec392b1729262f20a049a653/68747470733a2f2f692e6962622e636f2f6d68774c7a34392f31633562323033302d313034342d343265362d393662622d6532343062326562316363372e706e67" alt="DbVisuzlier" title="DbVisuzlier" data-canonical-src="https://i.ibb.co/mhwLz49/1c5b2030-1044-42e6-96bb-e240b2eb1cc7.png" height="20"/>

<img src="https://camo.githubusercontent.com/01e7ac492c71a987a5212c23de770b8b39588e90/68747470733a2f2f692e6962622e636f2f6a5772747851372f44622d56697375616c697a65722d467265652d31302d302d31362d6c6f63616c2d6261636b656e642d646576656c6f706d656e742e706e67" alt="ERD" data-canonical-src="https://i.ibb.co/jWrtxQ7/Db-Visualizer-Free-10-0-16-local-backend-development.png" height="400">

##### Initialization tasks

Note: running only the 1st task (api_reseed) is enough, it will simply setup everything.

1. Fetch data from external api and reseed 

    `rake db:api_reseed`
    
2. Fetch data from api and output to json files
    
    `rake api:fetch`
    
    * Output files will be located at db\json\restaurants|reviews|cuisines.json

3. Reset database and seed json data files

    `rake db:reseed`

4. Remigrate database

    `rake db:remigrate`

##### External API (Zomato)

> Zomato APIs give you access to the freshest and most exhaustive information for over 1.5 million restaurants across 10,000 cities globally.

This API is used to fetch restaurants, locations, reviews and cuisines for easy start.

---
#### API
##### Swagger
- Browse: http://localhost:3001/api-docs/
- Api-docs can be generated (spec/integration files) using task:

    `rake rswag:specs:swaggerize` 
   
   <img src="https://camo.githubusercontent.com/9b8fe5a916d73894944bdd0dfc7ce547f6ff7149/68747470733a2f2f692e6962622e636f2f3343534c6671442f657a6769662d312d3930336133643333653163362e676966" alt="Swagger" data-canonical-src="https://i.ibb.co/3CSLfqD/ezgif-1-903a3d33e1c6.gif"  height="300">
---
#### Testing
How to run the test suite:

- Run all tests using:    `rspec`
- Only model tests:     `rspec spec/integrations`   
- Only integration tests:    `rspec spec/integrations`
---
#### Integrations

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
    
---   
#### Services (job queues, cache servers, search engines, etc.)
TBD
---
#### Deployment instructions
TBD
---
    

