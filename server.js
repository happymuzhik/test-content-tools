const express = require('express')
const app = express()

module.exports = function() {
  app.listen(8000, function () {
    console.log('Example app listening on port 8000!')
  })
  
  app.use('/', express.static('./public'))
  app.use('/css', express.static('./public/css'))
  app.use('/js', express.static('./public/js'))
}