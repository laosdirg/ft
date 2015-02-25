import React from 'react'
import crossroads from 'crossroads'
import hasher from 'hasher'

import * as actorActions from './actor/actions'
import * as caseActions from './case/actions'

import ActorPage from './actor/components/actor_page.jsx!'
import ActorsPage from './actor/components/actors_page.jsx!'

import CasesPage from './case/components/cases_page.jsx!'
import FilterList from './case/components/filter_list.jsx!'

import NotFoundPage from './core/components/not_found.jsx!'


export function renderToDOM( container ){

  crossroads.shouldTypecast = true
  crossroads.addRoute('/', function(){
    crossroads.parse('/actors')
  })
  crossroads.addRoute('/actors', function(){
    let element = React.createElement( ActorsPage )
    React.render( element, container )
  });
  crossroads.addRoute('/actors/{id}', function(id){
    actorActions.loadActor( id )

    let element = React.createElement( ActorPage, { actorId: id })
    React.render( element, container )
  });
  crossroads.addRoute('/cases', function(){
    let element = React.createElement( FilterList )
    React.render( element, container)
  });
  crossroads.addRoute('/cases/{filterid}', function(){
    caseActions.loadCases( filterid )

    let element = React.createElement( CasesPage )
    React.render( element, container)
  });
  crossroads.addRoute('/{path}', function(path){
    let element = React.createElement( NotFoundPage )
    React.render( element, container )
  });

  crossroads.routed.add(function(request, data){
    console.log("Router got request", request, data.route +' - '+ data.params +' - '+ data.isFirst);
  });

  // events
  window.addEventListener('popstate', event => {
    crossroads.parse( document.location.pathname )
  })
  let url = document.location.pathname
    .replace("%C3%A6", 'æ')
    .replace("%C3%B8", 'ø')
    .replace("%C3%A5", 'å')
  crossroads.parse( url )


}
