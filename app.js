const express = require('express')
const app = express()
const port = 3000


  app.get('/file/:filename', function(req, res){
    var fileName = req.params.filename;
    const file = __dirname +'\\' + fileName;
    console.log("requested filename: " + file);
    res.sendFile(file); // Set disposition and send it.
  });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

