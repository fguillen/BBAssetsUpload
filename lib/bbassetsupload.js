/*
  # BBAssetsUpload

  * url: https://github.com/fguillen/BBAssetsUpload
  * author: http://fernandoguillen.info
  * demo page: http://fguillen.github.com/BBAssetsUpload/

  ## Versión

      v0.0.3

  ## Documentation

  * README: https://github.com/fguillen/BBAssetsUpload/blob/master/README.md
*/


var BBAssetsUpload;

$(function(){
  console.log( "[BBAssetsUpload 0.0.3] BBAssetsUpload::Loading ..." );

  // Removing dragover event over page
  $(document.body).bind("dragover", function(e){
    e.stopPropagation();
    e.preventDefault();
    return false
  });

  //
  // The root class
  //
  BBAssetsUpload = function( opts ){
    console.debug( "[BBAssetsUpload 0.0.3] BBAssetsUpload::Initializing with opts", opts );

    if (typeof opts.listSortable === 'undefined') { opts.listSortable = true }

    // required
    this.url                    = opts.url;
    this.listElement            = opts.listElement;
    this.dropElement            = opts.dropElement;
    this.assetTemplate          = opts.assetTemplate;
    this.assetUploadingTemplate = opts.assetUploadingTemplate;

    // optional
    this.listSortable           = opts.listSortable
    this.onStartCallback        = opts.onStart
    this.onProgressCallback     = opts.onProgress
    this.onSuccessCallback      = opts.onSuccess
    this.onErrorCallback        = opts.onError

    this.validateOptions = function( opts ){
      errors = [];

      if( !opts.url ) errors.push( "'url' required" );
      if( !opts.listElement ) errors.push( "'listElement' required" );
      if( !opts.dropElement ) errors.push( "'dropElement' required" );
      if( !opts.assetTemplate ) errors.push( "'assetTemplate' required" );
      if( !opts.assetUploadingTemplate ) errors.push( "'assetUploadingTemplate' required" );

      if( opts.listElement && !opts.listElement.length ) errors.push( "'listElement' element not found with selector '" + opts.listElement.selector + "'" );
      if( opts.dropElement && !opts.dropElement.length ) errors.push( "'dropElement' element not found with selector '" + opts.dropElement.selector + "'" );
      if( opts.assetTemplate && !opts.assetTemplate.length ) errors.push( "'assetTemplate' template empty" );
      if( opts.assetUploadingTemplate && !opts.assetUploadingTemplate.length ) errors.push( "'assetUploadingTemplate' template empty" );

      if( errors.length > 0 ) {
        errors.unshift( errors.length + " errors found in options")
        throw new Error( errors.join( ", " ) )
      }
    };

    this.initialize = function( opts ){
      this.validateOptions( opts );

      // global events
      this.eventCatcher = _.extend({}, Backbone.Events);
      if( this.onStartCallback ) this.eventCatcher.on( "asset:start", this.onStartCallback );
      if( this.onProgressCallback ) this.eventCatcher.on( "asset:progress", this.onProgressCallback );
      if( this.onSuccessCallback ) this.eventCatcher.on( "asset:success", this.onSuccessCallback );
      if( this.onErrorCallback ) this.eventCatcher.on( "asset:error", this.onErrorCallback );

      // Backbone elements
      this.assets = new BBAssetsUpload.Backbone.Assets({
        url: this.url,
        eventCatcher: this.eventCatcher
      });

      this.dropView = new BBAssetsUpload.Backbone.DropView({
        el: this.dropElement,
        collection: this.assets,
        url: this.url,
        validator: new BBAssetsUpload.FileValidator( opts )
      });

      this.assetsView = new BBAssetsUpload.Backbone.AssetsView({
        reorderUrl: this.url + "/reorder",
        collection: this.assets,
        assetTemplate: this.assetTemplate,
        assetUploadingTemplate: this.assetUploadingTemplate,
        listSortable: this.listSortable
      });

      $(this.listElement).append( this.assetsView.render().el );

      this.assets.fetch();
    };

    this.destroy = function(){
      this.dropView.undelegateEvents();
      this.assetsView.undelegateEvents();
      this.assets.off();
    }

    this.initialize( opts );
  };


  //
  // Messages if any file validation error
  //
  BBAssetsUpload.Messages = {
    maxFileSizeExceeded: "File too big",
    fileTypeNotAccepted: "File type not accepted"
  };

  //
  // To be used as HTML element classes or data custom attributes
  //
  BBAssetsUpload.Constants = {
    URL: (window.URL || window.webkitURL),
    assetElementClass: "bbassetsupload-asset",
    assetListClass: "bbassetsupload-assets",
    assetDataId: "data-bbassetsupload-asset-id",
    dropOverClass: "bbassetsupload-over"
  };


  //
  // The File Validator
  // in charge of validate each file
  // showing alert messages if any error found
  //
  BBAssetsUpload.FileValidator = function( opts ){
    // optional
    this.acceptFileTypes = opts.acceptFileTypes;
    this.maxFileSize = opts.maxFileSize * 1000;

    this.errors = function( file ){
      var result = [];

      if( this.maxFileSize ) {
        if( file.size > this.maxFileSize ) {
          result.push( BBAssetsUpload.Messages.maxFileSizeExceeded );
        }
      }

      if( this.acceptFileTypes ) {
        var file_extension = file.name.split( "\." ).slice(-1)[0];
        var regExp = new RegExp( "(^|,| )" + file_extension + "($|,| )", "i" )

        if( this.acceptFileTypes.search( regExp ) == -1 ){
          result.push( BBAssetsUpload.Messages.fileTypeNotAccepted );
        }
      }

      if( result.length == 0 ) return false;
      return result;
    };

    this.validate = function( file ){
      var errors = this.errors( file );
      if( errors ) {
        message = "The file '" + file.name + "' has errors: ";
        message += errors.join( ", " );
        alert( message );
        return false;
      } else {
        return true;
      }
    };
  };

  //
  // Backbone elements
  //
  BBAssetsUpload.Backbone = {}

  //
  // The Asset Model
  //
  BBAssetsUpload.Backbone.Asset = Backbone.Model.extend({
    initialize: function(){
      _.bindAll( this, "onProgress", "onSuccess", "onError" );
      if( !this.get( "state" ) ) this.set( "state", "completed" );
    },

    toJSONDecorated: function() {
      return _.extend( this.toJSON(), { cid: this.cid } );
    },

    upload: function() {
      console.debug( "[BBAssetsUpload 0.0.3] Uploading file: " + this.get( "file" ).name );

      $.upload(
        this.get( "url" ),
        this.get( "file" ),
        {
          upload:   { progress: this.onProgress },
          success:  this.onSuccess,
          error:    this.onError
        }
      );
    },

    onStart: function(){
      if( this.eventCatcher ) this.eventCatcher.trigger( "asset:start", this );
    },

    onProgress: function( event ){
      var progress = Math.round((event.position / event.total) * 100);
      var opts = { "progress": progress };
      if( progress == 100 ) opts["state"] = "processing";
      this.set( opts );
      if( this.eventCatcher ) this.eventCatcher.trigger( "asset:progress", this );
    },

    onSuccess: function( event ){
      console.debug( "[BBAssetsUpload 0.0.3] File uploaded: " + this.get( "file" ).name );
      var opts = _.extend( event, { "state": "completed" } );
      this.set( opts );
      if( this.eventCatcher ) this.eventCatcher.trigger( "asset:success", this );
    },

    onError: function( event ){
      console.error( "[BBAssetsUpload 0.0.3] onError uploading file: " + this.get( "file" ).name, event );
      if( this.eventCatcher ) this.eventCatcher.trigger( "asset:error", this );
    }
  });

  //
  // The Assets Collection
  //
  BBAssetsUpload.Backbone.Assets = Backbone.Collection.extend({
    model: BBAssetsUpload.Backbone.Asset,
    initialize: function( options ){
      this.url = options.url;
      this.eventCatcher = options.eventCatcher;
      this.on( "add", this.initializeAssetEventCatcher, this );
    },

    initializeAssetEventCatcher: function( model ){
      model.eventCatcher = this.eventCatcher;
      model.onStart();
    }
  });

  //
  // The AssetsOrder Model
  // in charge of sent reorder requests
  //
  BBAssetsUpload.Backbone.AssetsOrder = Backbone.Model.extend({
    initialize: function( options ){
      this.url = options.url
    }
  });

  //
  // The Assets View
  // in charge or render all the Assets
  //
  BBAssetsUpload.Backbone.AssetsView = Backbone.View.extend({
    tagName: "ul",

    attributes: {
      class: BBAssetsUpload.Constants.assetListClass
    },

    initialize: function() {
      this.collection.on( 'add',   this.addOne, this );
      this.collection.on( 'reset', this.addAll, this );

      if( this.options.listSortable ) {
        this.$el.sortable({
          placeholder : "placeholder",
          items       : "li.completed." + BBAssetsUpload.Constants.assetElementClass,
          update      : $.proxy( this.updateOrder, this ),
        });

        this.$el.disableSelection();
      }
    },

    updateOrder: function(){
      var sorted_ids =
        $.makeArray(
          this.$el.find( "li." + BBAssetsUpload.Constants.assetElementClass ).map( function( element ){
            return $(this).attr( BBAssetsUpload.Constants.assetDataId );
          })
        );

      var asset_order = new BBAssetsUpload.Backbone.AssetsOrder({ url : this.options.reorderUrl });
      asset_order.save({ ids: sorted_ids })
    },

    addOne: function( model ) {
      var view = new BBAssetsUpload.Backbone.AssetView({
        model: model,
        template: this.options.assetTemplate,
        templateUploading: this.options.assetUploadingTemplate,
      });

      this.$el.append( view.render().el );
      if( this.options.listSortable ) {
        this.$el.sortable( "refresh" );
      }
    },

    addAll: function() {
      this.collection.each( $.proxy( this.addOne, this ) );
    },
  });

  //
  // The Asset View
  // in charge or rendering each Asset
  // changing between templates on depending the Asset.state
  //
  BBAssetsUpload.Backbone.AssetView = Backbone.View.extend({
    tagName: "li",

    attributes: {
      class: BBAssetsUpload.Constants.assetElementClass,
    },

    initialize: function(){
      this.template = _.template( this.options.template );
      this.templateUploading = _.template( this.options.templateUploading );

      this.model.on( "destroy", this.remove, this );
      this.model.on( "change", this.render, this );
    },

    events: {
      "click .delete": "destroy"
    },

    destroy: function(){
      this.model.destroy();
    },

    render: function() {
      var template = this.model.get( "state" ) == "completed" ? this.template : this.templateUploading;
      this.$el.html( template( this.model.toJSONDecorated() ) );
      this.$el.addClass( this.model.get( "state" ) );
      this.$el.attr( BBAssetsUpload.Constants.assetDataId, this.model.id );

      return this;
    }

  });

  //
  // The Drop View
  // in charge of capturing the `drop` event
  // and create new Assets on demand
  //
  BBAssetsUpload.Backbone.DropView = Backbone.View.extend({
    events: {
      "drop":       "drop",
      "dragenter":  "dragEnter",
      "dragover":   "dragOver",
      "dragleave":  "dragLeave"
    },

    initialize: function( options ) {
      this.url = options.url;
    },

    // events inspired on: Code modified from: https://github.com/maccman/holla/blob/master/app/javascripts/lib/jquery.drop.js
    // License: MIT
    dragEnter: function( event ) {
      this.$el.addClass( BBAssetsUpload.Constants.dropOverClass );
      this.stopEvent( event );
      return false;
    },

    dragOver: function( event ) {
      event.originalEvent.dataTransfer.dropEffect = "copy";
      this.stopEvent( event );
      return false;
    },

    dragLeave:function( event ) {
      this.$el.removeClass( BBAssetsUpload.Constants.dropOverClass );
      this.stopEvent( event );
      return false;
    },

    drop: function( event ){
      this.$el.removeClass( BBAssetsUpload.Constants.dropOverClass );
      var files = event.originalEvent.dataTransfer.files;
      this.stopEvent( event );
      this.processFiles( files );
      return false;
    },

    processFiles: function( files ){
      _.each( files, function( file ){
        this.processFile( file )
      }, this);
    },

    processFile: function( file ){
      if( this.options.validator.validate( file ) ) {
        asset = this.createAsset( file );
        this.uploadAsset( asset )
      }
    },

    uploadAsset: function( asset ){
      asset.upload();
    },

    createAsset: function( file ){
      var file_url = BBAssetsUpload.Constants.URL.createObjectURL( file );
      var asset =
        new BBAssetsUpload.Backbone.Asset({
          url:        this.url,
          name:       file.name,
          file:       file,
          file_url:  file_url,
          progress:   0,
          state:      "uploading",
        });

      this.collection.add( asset );

      return asset;
    },

    stopEvent: function( event ){
      event.stopPropagation();
      event.preventDefault();
    }
  });

  console.log( "[BBAssetsUpload 0.0.3] ... BBAssetsUpload::Loaded" );
});
