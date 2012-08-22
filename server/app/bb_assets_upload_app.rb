require "rubygems"
require "sinatra/base"
require "digest/md5"
require "json"
require "#{File.dirname(__FILE__)}/asset"

CONFIG = {
  :max_database_size => 4000 # in KB
}

class BBAssetsUploadApp < Sinatra::Base
  configure do
    disable :raise_errors
    disable :show_exceptions
  end

  before do
    headers(
      'Access-Control-Allow-Origin'       => "*",
      'Access-Control-Allow-Methods'      => "POST, GET, OPTIONS, PUT, DELETE",
      'Access-Control-Max-Age'            => "1728000",
      'Access-Control-Allow-Headers'      => "origin, x-requested-with, content-type"
    )
  end

  options "/*" do
    "*"
  end

  #
  # database
  #
  @@assets = {}

  #
  # API
  #

  get "/" do
    "Yes! this is the BBAssetsUpload JSON API Server :)"
  end

  get "/assets/:storage" do
    render( assets( params[:storage] ) )
  end

  post "/assets/:storage" do
    asset =
      Asset.new(
        params[:file][:tempfile],
        params[:storage],
        "#{request.env['rack.url_scheme']}://#{request.env['HTTP_HOST']}",
        params[:file][:filename],
        params[:file][:type]
      )

    assets( params[:storage] ).push( asset )

    check_database_size

    render( asset )
  end

  post "/assets/:storage/reorder" do
    data = JSON::parse( request.env["rack.input"].read )
    assets_reordered = []

    data["ids"].each do |id|
      asset = assets( params[:storage] ).select{ |asset| asset.id.to_s == id.to_s }.first
      assets_reordered.push( asset )
    end

    assets( params[:storage] ).replace( assets_reordered )

    render( assets( params[:storage] ) )
  end

  delete "/assets/:storage/:id" do
    asset = assets( params[:storage] ).delete_if{ |asset| asset.id.to_s == params[:id].to_s }.first
    render( asset )
  end

  get "/download/:storage/:id" do
    asset = assets( params[:storage] ).select{ |asset| asset.id.to_s == params[:id].to_s }.first
    content_type asset.content_type
    asset.data
  end

  #
  # Util methods
  #

  def assets( storage )
    @@assets[ request.ip ] ||= { "files" => [], "images" => [] }
    @@assets[ request.ip ][ storage ]
  end

  def render( object )
    content_type :json
    JSON.pretty_generate( object )
  end

  def database_size
    result = 0

    @@assets.each do |k, v|
      v[ "files" ].each { |asset| result += asset.data.length }
      v[ "images" ].each { |asset| result += asset.data.length }
    end

    result = result / 1000

    result
  end

  def check_database_size
    if( database_size > CONFIG[:max_database_size] )
      puts "BBAssetsUploadApp: reseting database"
      @@assets = {}
    end
  end
end