// tslint:disable-next-line: no-var-requires
let express = require('express')
// tslint:disable-next-line: no-var-requires
let cors = require('cors')
let app = express()
 
let corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
 
app.get('/', cors(corsOptions), function(req, res, next) {
  res.json({msg: 'This is CORS-enabled for only example.com.'})
})
 
app.listen(3333, function() {
  console.log('CORS-enabled web server listening on port 3333')
})