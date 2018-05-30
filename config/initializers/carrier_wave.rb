require 'carrierwave/orm/activerecord'

CarrierWave.configure do |config|
  if Rails.env.production?
    config.fog_credentials = {
      provider: 'AWS',
      aws_access_key_id: ENV['AWS_ACCESS_KEY_ID'],
      aws_secret_access_key: ENV['AWS_SECRET_ACCESS_KEY'],
      region: 'us-east-2' ,
      path_style: true
    }
    config.storage :fog
    config.fog_directory = ENV['S3_BUCKET_NAME']
    # config.asset_host =
  else
    config.storage :file
  end
end
