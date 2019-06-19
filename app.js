const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/download', function(req, res){
    const file = `./component-A.js`;
    res.download(file); // Set disposition and send it.
  });

  app.get('/file', function(req, res){
    const file = `/Angular/ftp/component-A.js`;
    res.sendFile(file); // Set disposition and send it.
  });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

