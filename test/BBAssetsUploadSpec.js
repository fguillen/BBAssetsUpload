$(function(){
  describe( "BBAssetsUpload", function(){
    beforeEach( function(){
      this.options = {
        url: "http://wadus.com/assets",
        listElement: $("#section-1 .files"),
        dropElement: $("#section-1 .drop"),
        assetTemplate: $("#template-file").html(),
        assetUploadingTemplate: $("#template-file-uploading").html()
      };

      this.fakeData = [
        {
          "name": "name 1",
          "url": "url 1",
        },
        {
          "name": "name 2",
          "url": "url 2",
        }
      ];

      spyOn( $, "ajax" ).andCallFake( $.proxy( function( options ){
        if( options.url == "http://wadus.com/assets" ) options.success( this.fakeData );
      }, this ) );
    });

    describe( "BBAssetsUpload.Backbone.Asset", function(){
      it( "should be initialized with state completed by default", function(){
        var asset = new BBAssetsUpload.Backbone.Asset();
        expect( asset.get( "state" ) ).toEqual( "completed" );
      });

      it( "should override state if in options", function(){
        var asset = new BBAssetsUpload.Backbone.Asset({ state: "wadus" });
        expect( asset.get( "state" ) ).toEqual( "wadus" );
      });

      it( "should update progress", function(){
        var asset = new BBAssetsUpload.Backbone.Asset();
        asset.onProgress({ position: 50, total: 200 })
        expect( asset.get( "progress" ) ).toEqual( 25 );
      });

      it( "on progress 100 should change state to processing", function(){
        var asset = new BBAssetsUpload.Backbone.Asset();
        asset.onProgress({ position: 200, total: 200 })
        expect( asset.get( "progress" ) ).toEqual( 100 );
        expect( asset.get( "state" ) ).toEqual( "processing" );
      });

      it( "should update all in onSuccess", function(){
        var asset = new BBAssetsUpload.Backbone.Asset({ state: "wadus" });
        asset.set("file", { name: "file_name" });
        asset.onSuccess({ field1: "value1", field2: "value2" })
        expect( asset.get( "field1" ) ).toEqual( "value1" );
        expect( asset.get( "state" ) ).toEqual( "completed" );
      });
    });

    describe( "Initialization", function(){
      beforeEach( function(){
        this.bbAssetsUpload = new BBAssetsUpload( this.options );
      });

      afterEach( function(){
        this.bbAssetsUpload.destroy();
        $("#section-1 .files").empty();
      });

      it( "should use options", function(){
        expect( this.bbAssetsUpload.url ).toEqual( this.options.url );
        expect( this.bbAssetsUpload.listElement ).toEqual( this.options.listElement );
        expect( this.bbAssetsUpload.dropElement ).toEqual( this.options.dropElement );
        expect( this.bbAssetsUpload.assetTemplate ).toEqual( this.options.assetTemplate );
        expect( this.bbAssetsUpload.assetUploadingTemplate ).toEqual( this.options.assetUploadingTemplate );
      });

      it( "on start should fetch the files", function(){
        expect( $("#section-1 ul." + BBAssetsUpload.Constants.assetListClass ).length ).toEqual( 1 )
        expect( $("#section-1 ul." + BBAssetsUpload.Constants.assetListClass + " li." + BBAssetsUpload.Constants.assetElementClass ).length ).toEqual( 2 )
        expect( $("#section-1 ul." + BBAssetsUpload.Constants.assetListClass + " li." + BBAssetsUpload.Constants.assetElementClass ).html() ).toEqual( "name 1, url 1" )
      });
    });

    describe( "Initialization Errors", function(){
      it( "should exit if some required attribute missing", function(){
        var error_options = {}
        error_message = "5 errors found in options, 'url' required, 'listElement' required, 'dropElement' required, 'assetTemplate' required, 'assetUploadingTemplate' required"
        expect( function() { new BBAssetsUpload( error_options ) } ).toThrow( error_message );
      });

      it( "should exit if some CSS elements not found", function(){
        var error_options = {
          url: "the_url",
          listElement: $("#not-exists listElement"),
          dropElement: $("#not-exists dropElement"),
          assetTemplate: $("#not-exists assetTemplate").html(),
          assetUploadingTemplate: $("#not-exists assetUploadingTemplate").html()
        };
        error_message = "4 errors found in options, 'assetTemplate' required, 'assetUploadingTemplate' required, 'listElement' element not found with selector '#not-exists listElement', 'dropElement' element not found with selector '#not-exists dropElement'"
        expect( function() { new BBAssetsUpload( error_options ) } ).toThrow( error_message );
      });
    });

    describe( "Events", function(){
      beforeEach( function(){
        this.startCallback = jasmine.createSpy( "startCallback" );
        this.progressCallback = jasmine.createSpy( "progressCallback" );
        this.successCallback = jasmine.createSpy( "successCallback" );
        this.errorCallback = jasmine.createSpy( "errorCallback" );

        this.options =
          _.extend( this.options, {
            onStart: this.startCallback,
            onProgress: this.progressCallback,
            onSuccess: this.successCallback,
            onError: this.errorCallback
          });

        this.bbAssetsUpload = new BBAssetsUpload( this.options );

        spyOn( BBAssetsUpload.Backbone.AssetView.prototype, 'render' ).andReturn({ el: "" });
      });

      afterEach( function(){
        this.bbAssetsUpload.destroy();
        $("#section-1 .files").empty();
      });

      it( "should call onStart callback", function(){
        var asset = new BBAssetsUpload.Backbone.Asset();
        this.bbAssetsUpload.assets.add( asset )
        expect( this.startCallback ).toHaveBeenCalledWith( asset );
      });

      it( "should call onProgress callback", function(){
        var asset = new BBAssetsUpload.Backbone.Asset();
        this.bbAssetsUpload.assets.add( asset );
        asset.onProgress({ position: 50, total: 100 });
        expect( this.progressCallback ).toHaveBeenCalledWith( asset );
      });

      it( "should call onSuccess callback", function(){
        var asset = new BBAssetsUpload.Backbone.Asset({ file: { name: "fileName" } });
        this.bbAssetsUpload.assets.add( asset );
        asset.onSuccess({});
        expect( this.successCallback ).toHaveBeenCalledWith( asset );
      });

      it( "should call onError callback", function(){
        var asset = new BBAssetsUpload.Backbone.Asset({ file: { name: "fileName" } });
        this.bbAssetsUpload.assets.add( asset );
        asset.onError({});
        expect( this.errorCallback ).toHaveBeenCalledWith( asset );
      });
    });

    describe( "UI", function(){
      beforeEach( function(){
        this.files = [
          {
            name: "file1.jpg",
          },
          {
            name: "file2.jpg",
          },
        ]

        this.eventDrop = {
          originalEvent: {
            dataTransfer: {
              files: this.files
            }
          }
        }

        this.bbAssetsUpload = new BBAssetsUpload( this.options );
        spyOn( BBAssetsUpload.Constants.URL, "createObjectURL" ).andReturn( "xxx120.jpg" );
      });

      afterEach( function(){
        this.bbAssetsUpload.destroy();
        $("#section-1 .files").empty();
      });

      it( "when dragenter should add class", function(){
        this.bbAssetsUpload.dropView.$el.trigger( "dragenter" );
        expect( $("#section-1 .drop").hasClass( BBAssetsUpload.Constants.dropOverClass ) ).toBeTruthy();
      });

      it( "when dragleave should remove class", function(){
        $("#section-1 .drop").addClass( BBAssetsUpload.Constants.dropOverClass )
        this.bbAssetsUpload.dropView.$el.trigger( "dragleave" );
        expect( $("#section-1 .drop").hasClass( BBAssetsUpload.Constants.dropOverClass ) ).toBeFalsy();
      });

      it( "when drop files a new elements have to be added", function(){
        spyOn( this.bbAssetsUpload.dropView, "stopEvent" );
        spyOn( this.bbAssetsUpload.dropView, "uploadAsset" );
        this.bbAssetsUpload.dropView.drop( this.eventDrop );

        expect( this.bbAssetsUpload.dropView.uploadAsset.callCount ).toEqual( 2 );

        expect( $("#section-1 ul." + BBAssetsUpload.Constants.assetListClass ).length ).toEqual( 1 )
        expect( $("#section-1 ul." + BBAssetsUpload.Constants.assetListClass + " li." + BBAssetsUpload.Constants.assetElementClass ).length ).toEqual( 4 )
        expect( $($("#section-1 ul." + BBAssetsUpload.Constants.assetListClass + " li." + BBAssetsUpload.Constants.assetElementClass )[2]).html() ).toEqual( "file1.jpg, xxx120.jpg, 0, uploading" )
      });
    });

  });
});