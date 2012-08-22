# BBAssetsUpload

JS plugin to allow _drag and drop_ for multiple ajax assets uploading.

Check the [demo page](http://fguillen.github.com/BBAssetsUpload)

## How it works

Just drop multiple files from your local folder to the _drop area_ and the uploading will start inmediately.

BBAssetsUpload also provides a _drag and drop_ reordering functionality.

BBAssetsUpload will deal with your server JSON API to:

* fetch already existing files
* upload new files
* remove files
* reorder files

## Version

* 0.0.1 (but already in production applications)

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
      acceptFileTypes: "jpg, jpeg, png"
    });

## Server JSON API

BBAssetsUpload relieves in a JSON API like this:

* (POST) <master URL>: create one or multiple images, return the list of new images
* (GET) <master URL>: return the list of images
* (POST) <master URL>/reorder: create a new order for the images
* (DELETE) <master URL>: delete an image

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


## TODO

* check in more browsers
* Server
* Server reste each 5 minutes
* Explain server can not work
* Processing messages doesn't work in files example
* Support same file name


## License

This work is licensed under the Creative Commons Attribution 3.0 Unported License. To view a copy of this license, visit http://creativecommons.org/licenses/by/3.0/ or send a letter to Creative Commons, 444 Castro Street, Suite 900, Mountain View, California, 94041, USA.
