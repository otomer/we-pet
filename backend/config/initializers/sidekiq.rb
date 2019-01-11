Sidekiq.configure_server do |config|
  config.redis = {url: 'redis://localhost:6379/0'}
  schedule_file = "config/schedule.yml"
  Sidekiq.options[:poll_interval] = 15

  if File.exists?(schedule_file)
    puts 'yml schedule file: OK'
    if Sidekiq::Cron::Job.load_from_hash! YAML.load_file(schedule_file)
      puts '>> sidekiq loaded'
    else
      puts 'sidekiq cant load yml'
    end
  else
    puts 'yml schedule file: NOT FOUND'
  end
end

Sidekiq.configure_client do |config|
  config.redis = {url: 'redis://localhost:6379/0'}
end
