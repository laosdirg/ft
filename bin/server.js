var express = require('express')
var request = require('request')
var xml2js = require('xml2js')
var http2 = require('http2')
var fs = require('fs')

var app = express()

app.use( express.static( 'static' ));
app.use( express.static( '.' ));

var BASE_URL = 'http://oda.ft.dk/api/'

app.get( '/api/actor/:id', function( req, res ){
  ftReq = request( BASE_URL + 'Akt%C3%B8r('+req.params.id+')', function(error, response, body) {
    if (error){
      return res.send({error:true})
    }

    var json = JSON.parse(body);
    if (!json["biografi"]) {
     return res.send( json )
    }
    xml2js.parseString(json["biografi"], function(err, result){
     if (!err && result && result["membersMember"]) {
       json["biografi"] =  result.membersMember
     }
     res.send({
       id: json.id,
       typeid: json.typeid,
       name: json.navn,
       image: json.biografi.pictureMiRes[0],
       address: json.biografi.address[0],
     })
    })
  })
})

app.get( '/api/actors', function( req, res ){
  ftReq = request( BASE_URL + 'Akt%C3%B8r('+req.params.id+')', function(error, response, body) {
    if (error){
      return res.send({error:true})
    }

    var json = JSON.parse(body);
    if (!json["biografi"]) {
     return res.send( json )
    }
    xml2js.parseString(json["biografi"], function(err, result){
     if (!err && result && result["membersMember"]) {
       json["biografi"] =  result.membersMember
     }
     res.send({
       id: json.id,
       typeid: json.typeid,
       name: json.navn,
       image: json.biografi.pictureMiRes[0],
       address: json.biografi.address[0],
     })
    })
  })
})

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

app.set('views', './views'); // specify the views directory
app.get( '/*', function(req, res){
  res.render('index.jade')
})

app.listen(8080)
