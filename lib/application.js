import React from 'react'
import crossroads from 'crossroads'
import hasher from 'hasher'

import * as actorActions from './actor/actions'

import ActorPage from './actor/components/actor_page.jsx!'
import ActorsPage from './actor/components/actors_page.jsx!'
import NotFoundPage from './core/components/not_found.jsx!'

export function renderToDOM( container ){

  crossroads.shouldTypecast = true
  crossroads.addRoute('actors', function(){
    let element = React.createElement( ActorsPage )
    React.render( element, container )
  });
  crossroads.addRoute('actors/{id}', function(id){
    actorActions.loadActor( id )

    let element = React.createElement( ActorPage, { actorId: id })
    React.render( element, container )
  });
  crossroads.addRoute('/{path}', function(path){
    let element = React.createElement( NotFoundPage )
    React.render( element, container )
  });

  //setup hasher
  function parseHash(newHash, oldHash){
    crossroads.parse(newHash);
  }
  hasher.initialized.add(hash => {
    if (hash == '') {
      // redirect to "home" hash without keeping the empty hash on the history
      hasher.replaceHash('actors');
    }
  });
  hasher.initialized.add(parseHash); //parse initial hash
  hasher.changed.add(parseHash); //parse hash changes
  hasher.init(); //start listening for history change


}
