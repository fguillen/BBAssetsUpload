class Asset
  attr_accessor :id, :name, :content_type, :data, :url

  def initialize( file, storage, base_url, file_name, content_type )
    @id = "#{Asset.timestamp}-#{file_name}"
    @content_type = content_type
    @name = file_name
    @url = "#{base_url}/download/#{storage}/#{id}"
    @data = file.read
  end

  def to_json(*a)
    {
      :id    => id,
      :url   => url,
      :name  => name
    }.to_json(*a)
  end

  def self.timestamp
    Time.now.to_i
  end

end