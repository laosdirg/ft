import Immutable from 'immutable'

import Store from 'lib/vendor/flux/store'

//------------------------------------------------------------------------------

export class RouteStore extends Store {

  getInitialState(){
    return {
      routes: {

        HOME: {
          path: '/',
        },

        ACTORS: {
          path: '/actors',
        },

        ACTOR: {
          path: '/actors/:id',
        },

      }
    }
  }

  getCurrent(){
    return 'HOME'
  }

  handleAction( action ) {
    switch (action.type) {
      case 'ROUTE_NAVIGATED':
        return this.state.set('route', action.route)
      default:
        return this.state
    }
  }


}
