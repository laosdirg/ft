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
    action: 'REMOVE_FILTER',
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
    '/api/AktørAktør?$expand=TilAktør&$filter=fraaktørid eq ' + id,
  ]

  Promise.all( reqs.map( req => xhr.request(req) ) ).then(results => {
    let [aktør, aktøraktør] = results

    let aktører = aktøraktør.value.map(x => x.TilAktør)
    aktører.push(aktør)

    return dispatcher.dispatch({
      action: 'ACTOR_LOAD_SUCCESS',
      actorId: id,
      actors: aktører,
      relationships: aktøraktør.value,
    })
  }, error => {
    return dispatcher.dispatch({
      action: 'ACTOR_LOAD_ERROR',
      error: error
    })
  })

}
