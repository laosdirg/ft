import crossroads from 'crossroads'
import * as history from './api/history'

// TODO: Not in vendor
import * as actorActions from 'lib/shared/actor/actions'

export function navigate( route ) {
  this.action( actorActions.loadActors, 'MAIN' )

  switch (route) {
    case '/actors':
      this.action( actorActions.loadActors, 'MAIN' )
      break;
  }

  this.dispatch({
    type: 'ROUTE_NAVIGATED',
    route
  })

  crossroads.parse( route )
  history.push( route )

  return Promise.resolve(true)
}
