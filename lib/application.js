import React from 'react'
import crossroads from 'crossroads'

import ActorsPage from './actor/components/actors_page.jsx!'

import testdata from 'testdata'

export function renderToDOM( container ){

  crossroads.addRoute('actor/{id}', function(query){
    let element = React.createElement( ActorsPage, { actors: testdata.value } )
    React.render( element, container )
  });
  crossroads.bypassed.add(function(request){
    let element = React.createElement( ActorsPage, { actors: testdata.value } )
    React.render( element, container )
  });

   crossroads.parse(document.location.pathname + document.location.search)
}
