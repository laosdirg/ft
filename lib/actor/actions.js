import dispatcher from 'lib/core/dispatcher'
import xhr from 'lib/core/xhr'

import * as constants from './constants'

//---------------------------------------------------------------------------------------

export function applyFilter( filter ){
  dispatcher.dispatch({
    type: 'APPLY_FILTER',
    filter: filter
  })
}

export function removeFilter( filter ) {
  dispatcher.dispatch({
    type: 'REMOVE_FILTER',
    filter: filter
  })
}

//---------------------------------------------------------------------------------------

export function loadActors(identifier, query, skip) {
  dispatcher.dispatch({
    type: constants.ACTORS_LOAD_BEGAN,
    identifier: identifier,
    query: query,
    skip: skip,
  })

  let url = '/api/actors?'
  if (query && query.query) url += 'query=' + query.query + '&'
  if (skip) url += 'skip=' + skip + '&'

  xhr.request( url ).then(
    response => {
      return dispatcher.dispatch({
        type: constants.ACTORS_LOADED,
        identifier: identifier,
        actors: response,
        skip: skip,
      })
    },
    error => {
      return dispatcher.dispatch({
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
  dispatcher.dispatch({
    type: constants.ACTOR_LOAD_BEGAN,
    actorId: id
  })

  xhr.request('/api/actors/'+id).then(actor => {
    return dispatcher.dispatch({
      type: constants.ACTOR_LOADED,
      actor: actor,
    })
  }, error => {
    return dispatcher.dispatch({
      type: constants.ACTOR_LOAD_FAILED,
      actorId: actorId,
      error: error,
    })
  })

}
