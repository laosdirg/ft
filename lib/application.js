import React from 'react'
import crossroads from 'crossroads'
import hasher from 'hasher'

import ActorPage from './actor/components/actor_page.jsx!'
import ActorsPage from './actor/components/actors_page.jsx!'
import NotFoundPage from './core/components/not_found.jsx!'

export function renderToDOM( container ){

  crossroads.addRoute('actors', function(query){
    let element = React.createElement( ActorsPage )
    React.render( element, container )
  });
  crossroads.addRoute('actors/{id}', function(query){
    let element = React.createElement( ActorPage )
    React.render( element, container )
  });
  crossroads.addRoute('/{path}', function(request){
    let element = React.createElement( NotFoundPage )
    React.render( element, container )
  });

  //setup hasher
  function parseHash(newHash, oldHash){
    crossroads.parse(newHash);
  }
  hasher.initialized.add(parseHash); //parse initial hash
  hasher.changed.add(parseHash); //parse hash changes
  hasher.init(); //start listening for history change
}
