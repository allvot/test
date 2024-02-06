# server.rb
require 'sinatra'
require "yaml"
require "json"

# Custom middleware to enable CORS
before do
  content_type :json
  headers 'Access-Control-Allow-Origin' => '*',
          'Access-Control-Allow-Methods' => ['OPTIONS', 'GET', 'POST'],
          'Access-Control-Allow-Headers' => 'Content-Type'
end

options '*' do
  response.headers['Allow'] = 'HEAD, GET, POST, PUT, DELETE, OPTIONS'
  response.headers['Access-Control-Allow-Origin'] = '*'
  response.headers['Access-Control-Allow-Headers'] = 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Cache-Control, Accept'
  200
end

get '/' do
  'Welcome to Schedule!'
end

get '/shifts' do
  data = File.read("./app/resources/shifts.yml")
  sort_by = params['sort_by'] || "first_name"
  json_data = YAML.safe_load(data).sort_by do |employee|
    sort_by == "last_name" ? employee['name'].split.last : employee['name'].split.first
  end

  json_data.to_json
end
