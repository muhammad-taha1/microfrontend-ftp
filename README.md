# microfrontend-ftp

This project is used as a server for web components to be used by a background layer of a microfrontend app.

## Running the service
Run `node app.js` to run this service

## API
This project contains only 1 API:
`/file/:filename`

where filename has to be the filename we wish to retrieve from this project's directory. All web component js files have to be copied here and then served