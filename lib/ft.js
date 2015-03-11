import React from 'react'
import crossroads from 'crossroads'
import hasher from 'hasher'

import * as actorActions from './src/actor/actions'
import * as caseActions from './src/case/actions'

import ActorPage from './src/actor/components/actor_page.jsx!'
import ActorsPage from './src/actor/components/actors_page.jsx!'

import CasesPage from './src/case/components/cases_page.jsx!'
import CasePage from './src/case/components/case_page.jsx!'

import CaseTypeStore from './src/case/stores/casetype_store'

import NotFoundPage from './src/core/components/not_found.jsx!'

import { Dispatcher } from './src/core/dispatcher'

export function renderToString(path){
  //var dispatcher = new Dispatchr();

  let element = React.createElement( ActorsPage )
  React.renderToString( element )
}

export function renderToDOM( container ){
  var dispatcher = new Dispatcher();

  crossroads.shouldTypecast = true

  crossroads.addRoute('/', function(){
    crossroads.parse('/actors')
  })


  crossroads.addRoute('/actors', function(){
    actorActions.loadActors('MAIN')

    let element = React.createElement( ActorsPage )
    React.render( element, container )
  });


  crossroads.addRoute('/actors/{id}', function(id){
    actorActions.loadActor( id )

    let element = React.createElement( ActorPage, { actorId: id })
    React.render( element, container )
  });


  crossroads.addRoute('/cases', function(){
    let element = React.createElement( CasesPage )
    React.render( element, container)
  });


  crossroads.addRoute('/cases/{filter}', function(filter){
    let typeid = CaseTypeStore.getFor( filter )
    caseActions.loadCases( typeid )

    let element = React.createElement( CasesPage )
    React.render( element, container)
  });


  crossroads.addRoute('/case/{id}', function(id){
    let element = React.createElement( CasePage, { caseId: id })
    React.render( element, container )
  })


  crossroads.addRoute('/{path}', function(path){
    let element = React.createElement( NotFoundPage )
    React.render( element, container )
  });

  crossroads.routed.add(function(request, data){
    window.scrollTo(0, 0);
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
