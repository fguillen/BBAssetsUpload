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