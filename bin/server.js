var express = require('express')
var request = require('request')
var xml2js = require('xml2js')

var app = express()

app.get( '/api/:path', function ( req, res ) {
  var url = 'http://oda.ft.dk/' + req.url
  ftReq = request( url, function(error, response, body) {
     var json = JSON.parse(body);
     if (!json["biografi"]) {
       return res.send( json )
     }
     xml2js.parseString(json["biografi"], function(err, result){
       if (!err && result && result["membersMember"]) {
         json["biografi"] =  result.membersMember
       }
       res.send( json )
     })
   })
})

app.use( express.static( 'static' ));
app.use( express.static( '.' ));


app.listen(8080)
