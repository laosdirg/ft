import xhr from 'lib/shared/utils/xhr'

import * as constants from './constants'

//---------------------------------------------------------------------------------------

export function applyFilter( filter ){
  this.dispatch({
    type: 'APPLY_FILTER',
    filter: filter
  })
}

export function removeFilter( filter ) {
  this.dispatch({
    type: 'REMOVE_FILTER',
    filter: filter
  })
}

//---------------------------------------------------------------------------------------

export function loadMore(){

}

export function loadActors(identifier, query, skip) {
  this.dispatch({
    type: constants.ACTORS_LOAD_BEGAN,
    identifier: identifier,
    query: query,
    skip: skip,
  })

  let url = '/api/actors?'
  if (query && query.query) url += 'query=' + query.query + '&'
  if (skip) url += 'skip=' + skip + '&'

  return xhr.request( url ).then(
    response => {
      return this.dispatch({
        type: constants.ACTORS_LOADED,
        identifier: identifier,
        actors: response,
        skip: skip,
      })
    },
    error => {
      return this.dispatch({
        type: constants.ACTORS_LOAD_FAILED,
        identifier: identifier,
        query: query,
        skip: skip,
        error: error,
      })
    }
  )
}

export function loadActor( id ) {
  this.dispatch({
    type: constants.ACTOR_LOAD_BEGAN,
    actorId: id
  })

  xhr.request('/api/actors/'+id).then(actor => {
    return this.dispatch({
      type: constants.ACTOR_LOADED,
      actor: actor,
    })
  }, error => {
    return this.dispatch({
      type: constants.ACTOR_LOAD_FAILED,
      actorId: actorId,
      error: error,
    })
  })

}
