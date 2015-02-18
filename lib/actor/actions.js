import dispatcher from 'lib/core/dispatcher'
import xhr from 'lib/core/xhr'

export function applyFilter( filter ){
  dispatcher.dispatch({
    action: 'APPLY_FILTER',
    value: filter
  })
}

export function removeFilter(filter) {
  dispatcher.dispatch({
    action; 'REMOVE_FILTER',
    filter: filter
  })
}

export function loadActor( id ) {
  dispatcher.dispatch({
    action: 'ACTOR_LOAD_BEGIN',
    actorId: id
  })

  let reqs = [
    '/api/Aktør('+id+')',
    '/api/AktørAktør?$filter=fraaktørid eq ' + id,
  ]

  Promise.all( reqs.map( req => xhr.request(req) ) ).then(results => {
    let [aktør, aktøraktør] = results
    return dispatcher.dispatch({
      action: 'ACTOR_LOAD_SUCCESS',
      actor: aktør,
      relationships: aktøraktør.value,
    })
  }, error => {
    return dispatcher.dispatch({
      action: 'ACTOR_LOAD_ERROR',
      error: error
    })
  })

}
