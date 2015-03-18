import React from 'react'

import { Flux } from 'laosdirg-flux'
import { Component as FluxComponent } from 'laosdirg-flux/integrations/react'

//------------------------------------------------------------------------------

import App from './shared/common/components/app.jsx!'

import { ActorStore } from 'lib/shared/actor/stores/actor_store'
import { ActorActorStore } from 'lib/shared/actor/stores/actor_actor_store'
import { ActorTypeStore } from 'lib/shared/actor/stores/actor_type_store'
import { ActorFilterStore } from 'lib/shared/actor/stores/actor_filter_store'

import { CaseStore } from 'lib/shared/case/stores/case_store'
import { CasesStore } from 'lib/shared/case/stores/cases_store'
import { CaseTypeStore } from 'lib/shared/case/stores/casetype_store'
import { FilterStore } from 'lib/shared/case/stores/filter_store'

import { RouteStore } from 'laosdirg-flux-router/store'

//------------------------------------------------------------------------------

import './shared/actor/register'
import './shared/case/register'

//import 'laosdirg-flux-router/register'
//register(context)

//------------------------------------------------------------------------------

export class Context extends Flux {
  getStores(){
    return [
      ActorStore,
      ActorTypeStore,
      ActorFilterStore,
      CaseStore,
      CasesStore,
      CaseTypeStore,
      FilterStore,
      RouteStore,
    ]
  }
}

export function renderToDOM( context, container ){
  let element = React.createElement( FluxComponent, { ReactClass: App, flux: context })
  return React.render( element, container )
}

export function renderToString( context ){
  let element = React.createElement( FluxComponent, { ReactClass: App, flux: context })
  return React.renderToString( element )
}

//------------------------------------------------------------------------------








  /*crossroads.shouldTypecast = true

  crossroads.addRoute('/', function(){
    crossroads.parse('/actors')
  })


  crossroads.addRoute('/actors', function(){
    actorActions.loadActors(dispatcher, 'MAIN')

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
  if (window) {
  window.addEventListener('popstate', event => {
    crossroads.parse( document.location.pathname )
  })
  }
  let url = document.location.pathname
    .replace("%C3%A6", 'æ')
    .replace("%C3%B8", 'ø')
    .replace("%C3%A5", 'å')
  crossroads.parse( url )*/
