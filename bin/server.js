var express = require('express')
var request = require('request')
var xml2js = require('xml2js')
var http2 = require('http2')
var fs = require('fs')
var qs = require('querystring')


var app = express()

app.use( express.static( 'static' ));
app.use( express.static( '.' ));

var BASE_URL = 'http://oda.ft.dk/api/'

app.get( '/api/actors/:id', function( req, res ){
  ftReq = request( BASE_URL + 'Akt%C3%B8r('+req.params.id+')', function(error, response, body) {
    try {
      if (error) throw error

      var json = JSON.parse(body)
      actor = {
        object: "actor",
        id: json["id"],
        type: json["typeid"],
        name: json["navn"],
      }

      res.send(actor)
    } catch (err) {
      return res.send({error:err.toString()})
    }
  })
})

app.get( '/api/actors', function( req, res ){
  var query = {}
  if (req.query.skip) query["$skip"] = req.query.skip
  if (req.query.query) query["$filter"] = "substringof('"+ req.query.query +"',navn) eq true"

  var url = BASE_URL + 'Akt%C3%B8r?' + qs.stringify(query)
  console.log(url)
  ftReq = request( url, function(error, response, body) {
    try {
      if (error) throw error

      var json = JSON.parse(body)
      actors = json.value.map(function(x){
        return {
          object: "actor",
          id: x["id"],
          type: x["typeid"],
          name: x["navn"],
        }
      })

      res.send({
        object: 'list',
        has_more: false,
        items: actors,
      })
    } catch (err) {
      return res.send({error:err.toString()})
    }
  })
})

app.get( '/api/:path', function ( req, res ) {
  var url = 'http://oda.ft.dk/' + req.url
  ftReq = request( url, function(error, response, body) {
    try {
      if (error) throw error

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
    } catch (err) {
      return res.send({error:err.toString()})
    }

   })
})




//------------------------------------------------------------------------------


app.set('views', './views'); // specify the views directory


global.__DEV__ = true
var System = require('systemjs')
System.transpiler = 'babel'
System.import("../config").then(function(){
  System.import('../lib/server').then(function(server){


    app.get( '/*', server.serve)

})
})

app.listen(8080)
