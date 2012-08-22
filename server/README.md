# BBAssetsUpload API JSON Server

This is a very simple server just to try the functionalities of the JS Plugin BBAssetsUpload

## Install & Play

    git clone git://github.com/fguillen/BBAssetsUpload.git                        # Download the repository
    cd BBAssetsUpload/                                                            # Go to the created folder
    sed -i '.back' 's/bbassetsupload.herokuapp.com/localhost:4567/g' index.html   # Replace, in the demo page, any reference to the heroku url by your localhost
    cd server/                                                                    # Go to the server directory
    bundle Install                                                                # Install dependencies
    rackup -p 4567                                                                # Start the server
    # (maybe you have to move to another console)
    cd ..                                                                         # Go back to the root directory
    open index.html                                                               # Open the demo page


