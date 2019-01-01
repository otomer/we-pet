namespace :db do
  desc 'Drop, create, migrate then seed the development database'
  task reseed: [ 'db:drop', 'db:create', 'db:migrate', 'db:seed' ] do
    puts 'reseed task completed.'.blue
  end

  desc 'Generate api jsons, Drop, create, migrate then seed the development database'
  task api_reseed: ['api:fetch', 'db:drop', 'db:create', 'db:migrate', 'db:seed' ] do
    puts 'generate reseed task completed.'.blue
  end

  desc 'Drop, create and then migrate database'
  task remigrate: [ 'db:drop', 'db:create', 'db:migrate' ] do
    puts 'remigrate task completed.'.blue
  end
end