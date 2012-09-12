require "#{File.dirname(__FILE__)}/../app/bb_assets_upload_app.rb"
require "test/unit"
require "rack/test"
require "mocha"

class BBAssetsUploadAppTest < Test::Unit::TestCase
  include Rack::Test::Methods

  def fixture( file_name )
    "#{File.dirname(__FILE__)}/fixtures/#{file_name}"
  end

  def app
    BBAssetsUploadApp.new
  end

  def setup
    Asset.stubs( :timestamp ).returns( "timestamp" );

    @assets = {
      "127.0.0.1" => {
        "files" => [],
        "images" => []
      }
    }

    3.times.each do |index|
      file_name = "pinguin_#{index + 1}.jpg"

      asset =
        Asset.new(
          File.open( fixture( file_name ), "rb" ),
          "files",
          "http://localhost",
          file_name,
          "image/jpeg"
        )

      @assets["127.0.0.1"]["files"] << asset
    end

    BBAssetsUploadApp.class_variable_set( :@@assets, @assets )
  end

  def test_get_assets
    get "/assets/files"

    json_response = JSON::parse( last_response.body )

    assert_equal( "application/json;charset=utf-8", last_response.content_type )
    assert_equal( 3, json_response.length )
    assert_equal( "http://localhost/download/files/timestamp-pinguin_1.jpg", json_response.first["url"] )
    assert_equal( "pinguin_1.jpg", json_response.first["name"] )
    assert_equal( "timestamp-pinguin_1.jpg", json_response.first["id"] )
  end

  def test_create_asset
    post(
      "/assets/files",
      :file => Rack::Test::UploadedFile.new( fixture( "pinguin_1.jpg" ), "image/jpeg" )
    )

    json_response = JSON::parse( last_response.body )

    assert_equal( "application/json;charset=utf-8", last_response.content_type )
    assert_equal( "pinguin_1.jpg", json_response["name"] )
    assert_equal( "http://example.org/download/files/timestamp-pinguin_1.jpg", json_response["url"] )
    assert_equal( "timestamp-pinguin_1.jpg", json_response["id"] )
    assert_equal( 4, @assets["127.0.0.1"]["files"].length )
  end

  def test_reorder
    asset_1_id = @assets["127.0.0.1"]["files"][0].id
    asset_2_id = @assets["127.0.0.1"]["files"][1].id
    asset_3_id = @assets["127.0.0.1"]["files"][2].id

    post(
      "/assets/files/reorder",
      {},
      { "rack.input" => StringIO.new( JSON::generate({ "ids" => [asset_2_id, asset_3_id, asset_1_id] }) ) }
    )

    json_response = JSON::parse( last_response.body )

    assert_equal( "application/json;charset=utf-8", last_response.content_type )
    assert_equal( 3, json_response.length )
    assert_equal( "http://localhost/download/files/timestamp-pinguin_2.jpg", json_response.first["url"] )
    assert_equal( "pinguin_2.jpg", json_response.first["name"] )

    assert_equal( asset_2_id, @assets["127.0.0.1"]["files"][0].id )
    assert_equal( asset_3_id, @assets["127.0.0.1"]["files"][1].id )
    assert_equal( asset_1_id, @assets["127.0.0.1"]["files"][2].id )
  end

  def test_delete
    asset = @assets["127.0.0.1"]["files"][1]

    delete( "/assets/files/#{asset.id}" )
    assert_equal( 2, @assets["127.0.0.1"]["files"].length )
    assert_nil( @assets["127.0.0.1"]["files"].index( asset ) )
  end

  def test_download
    asset = @assets["127.0.0.1"]["files"][1]

    get "/download/files/#{asset.id}"
    assert_equal( "image/jpeg", last_response.content_type )
    assert_equal( asset.data, last_response.body )
  end

  def test_reset_database_in_post_if_database_size_exceeded
    CONFIG[:max_database_size] = 10

    post(
      "/assets/files",
      :file => Rack::Test::UploadedFile.new( fixture( "pinguin_1.jpg" ), "image/jpeg" )
    )

    json_response = JSON::parse( last_response.body )

    assert_equal( "application/json;charset=utf-8", last_response.content_type )
    assert_equal( "pinguin_1.jpg", json_response["name"] )

    assert_equal( 0, BBAssetsUploadApp.class_variable_get(:@@assets).length )
  end

  def test_database_size
    puts app.call( "database_size" )
  end
end