
class GenerateRandomUserJob < ActiveJob::Base
  queue_as :default

  def perform(*args)
    puts 'performing..'
    # Sidekiq::Cron::Job.create(name: "Example Job - every 1 min", cron: "*/1 * * * *", class: "GenerateRandomUserJob")
    sleep 2
  end
end

