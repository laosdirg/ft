import dispatcher from 'lib/core/dispatcher'
import xhr from 'lib/core/xhr'

export function changeSomething( value ){
  dispatcher.dispatch({
    action: 'something',
    value: value
  })
}

export function loadActor( id ) {
  dispatcher.dispatch({
    action: 'LOAD_ACTOR_BEGIN',
    actorId: id
  })

  xhr.request('/api/Aktør('+id+')').then(actor => {
    return dispatcher.dispatch({
      action: 'LOAD_ACTOR_SUCCESS',
      actor: actor
    })
  }).catch( error => {
    return dispatcher.dispatch({
      action: 'LOAD_ACTOR_ERROR',
      error: error
    })
  })
}
