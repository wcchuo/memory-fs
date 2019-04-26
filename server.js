var express    = require('express')
var serveIndex = require('serve-index')
var app = express()
 
app.use('/', express.static('public/'), serveIndex('public/', {'icons': true}))
app.listen(3001)
