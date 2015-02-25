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

export function loadActor( id ) {
  dispatcher.dispatch({
    type: constants.ACTOR_LOAD_BEGAN,
    actorId: id
  })

  let reqs = [
    '/api/Aktør('+id+')',
    '/api/AktørAktør?$expand=TilAktør&$filter=fraaktørid eq ' + id,
  ]

  Promise.all( reqs.map( req => xhr.request(req) ) ).then(results => {
    let [aktør, aktøraktør] = results

    let aktører = aktøraktør.value.map(x => x.TilAktør)
    aktører.push(aktør)

    return dispatcher.dispatch({
      type: constants.ACTOR_LOADED,
      actorId: id,
      actors: aktører,
      relationships: aktøraktør.value,
    })
  }, error => {
    return dispatcher.dispatch({
      type: constants.ACTOR_LOAD_FAILED,
      error: error
    })
  })

}
