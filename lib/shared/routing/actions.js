import crossroads from 'crossroads'
import * as history from './api/history'

import * as actorActions from '../actor/actions'

export function navigate(dispatcher, route) {
  actorActions.loadActors(dispatcher, 'MAIN')

  switch (route) {
    case '/actors':
      actorActions.loadActors(dispatcher, 'MAIN')
      break;
  }

  dispatcher.dispatch({
    type: 'ROUTE_NAVIGATED',
    route
  })

  crossroads.parse( route )
  history.push( route )

  return Promise.resolve(true)
}
