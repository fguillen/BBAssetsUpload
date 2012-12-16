# BBAssetsUpload

JS plugin to allow _drag and drop_ for multiple ajax assets uploading.

Check the [demo page](http://fguillen.github.com/BBAssetsUpload)

## How it works

Just drop multiple files from your local folder to the _drop area_ and the uploading will start inmediately.

_BBAssetsUpload_ also provides a _drag and drop_ reordering functionality.

_BBAssetsUpload_ will deal with your server JSON API to:

* fetch already existing files
* upload new files
* remove files
* reorder files

## Advantages

There are very [powerfull jQuery file uploads](http://blueimp.github.com/jQuery-File-Upload/) out there but for one reason or another they were very complicated to me to understand and to customize to my own purposes.

So I decided to implement my own one based on [BackboneJS](http://backbonejs.org/) and completely agnostic about _templating_ and styling with _CSS_.

As you can see in the [demo page](http://fguillen.github.com/BBAssetsUpload) the integration is very straight forward and the styling is completely up to you.

In the other hand this version is not properly tested, and only works in _modern_ browsers, so use it under your own responsability.

## Version

* 0.0.3 (but already in production applications)

## Usage

### Basic configuration

    new BBAssetsUpload({
      // (Required) The master URL for all the requests
      url: "http://wadus.com/assets/images",

      // (Required) reference to the DOM element where the file templates will be added
      listElement: $("#example-1 .images"),

      // (Required) reference to the DOM element where to drop files
      dropElement: $("#example-1 .drop"),

      // (Required) UnderscoreJS style template for files that are already uploaded
      assetTemplate: $("#template-file").html(),

      // (Required) UnderscoreJS style template for files that are beeing uploaded
      assetUploadingTemplate: $("#template-file-uploading").html(),
    });

### Optional configuration

    new BBAssetsUpload({
      // ... besides de Basic configuration

      // maximum file size in KB
      maxFileSize: 500,

      // list of accepted file extensions
      acceptFileTypes: "jpg, jpeg, png",

      // on start uploading callback
      onStart: function( asset ) {},

      // on progress uploading callback
      onProgress: function( asset ) {},

      // on success uploading callback
      onSuccess: function( asset ) {},

      // on error uploading callback
      onError: function( asset ) {}
    });

## Server JSON API

_BBAssetsUpload_ relieves in a JSON API like this:

* (POST) **master URL**: create one or multiple images, return the list of new images
* (GET) **master URL**: return the list of images
* (POST) **master URL**/reorder: create a new order for the images
* (DELETE) **master URL**: delete an image

### Response format

In the server response is important to remember to:

* Response in a JSON format
* Response always the **id** of the Image
* Try to not use the key **url** can be conflicts with the `Backbone.Model.url`.

### Example of Rails controller

    class Admin::PicsController < Admin::AdminController
      before_filter :load_performance

      def index
        @pics = @performance.pics.by_position
        render :json => @pics.map { |e| { :file_url => e.thumb(:admin), :id => e.id } }
      end

      def create
        @pic = @performance.pics.create!(:thumb => params[:file])
        render :json => { :file_url => @pic.thumb(:admin), :id => @pic.id }
      end

      def destroy
        @pic = @performance.pics.find(params[:id])
        @pic.destroy
        render :json => { :state => "ok" }
      end

      def reorder
        params[:ids].each_with_index do |id, index|
          @performance.pics.update_all(["position=?", index], ["id=?", id])
        end
        render :json => { :status => "ok" }
      end

      private

      def load_performance
        @performance = Performance.find(params[:performance_id])
      end
    end

## Browsers support

Tested in:

* (OSX) Chrome 21.0.1180.57
* (OSX) Firefox 8.0.1
* (OSX) Safari 6.0

## Dependencies

* [jquery](http://jquery.com)
* [underscorejs](http://underscorejs.org)
* [backbonejs](http://backbonejs.org)
* [jquery.ui sortable](http://jqueryui.com/demos/sortable/)

## Install

##### 1. Download [the last version of the code](https://github.com/fguillen/BBAssetsUpload/zipball/master).
##### 2. Unzip the package
##### 3. Copy `vendor` and `lib` folders to a _public_ folder in your web application. Let's call it `bbassetsupload`.
##### 4. Import the dependencies:

    <script src="./bbassetsupload/vendor/jquery.js" type="text/javascript" charset="utf-8"></script>
    <script src="./bbassetsupload/vendor/underscore.js" type="text/javascript" charset="utf-8"></script>
    <script src="./bbassetsupload/vendor/backbone.js" type="text/javascript" charset="utf-8"></script>
    <script src="./bbassetsupload/vendor/jquery.ui.js" type="text/javascript" charset="utf-8"></script>
    <script src="./bbassetsupload/vendor/jquery.upload.js" type="text/javascript" charset="utf-8"></script>

**Note**: if you application is already importing some of the _dependencies_ you have not to do it twice.

##### 5. Import the bbassetsupload plugin:

    <script src="./bbassetsupload/lib/bbassetsupload.js" type="text/javascript" charset="utf-8"></script>

##### 6. You are ready!


## Install the test Server JSON API

You can install the example server following [this instructions](https://github.com/fguillen/BBAssetsUpload/blob/master/server/README.md)


## TODO

* check in more browsers
* Server
* Server reste each 5 minutes
* Explain server can not work
* Processing messages doesn't work in files example
* Support same file name

## Attributions

Part of the most critical code is _inspired_ in the work of [Alex MacCaw](http://alexmaccaw.co.uk) who has offered it as MIT license.

This file for example: [jquery.upload.js](https://github.com/fguillen/BBAssetsUpload/blob/master/vendor/jquery.upload.js)


## License

MIT License

Copyright (c) 2012 Fernando Guillen Suarez

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.