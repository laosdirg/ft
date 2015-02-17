var express = require('express')
var request = require('request')

var app = express()

app.get( '/api/:path', function ( req, res ) {
  var url = 'http://oda.ft.dk/api/' + req.params.path
  console.log(url)
  request( url ).pipe(res);
})

app.use( express.static( 'static' ));
app.use( express.static( '.' ));


app.listen(8080)
