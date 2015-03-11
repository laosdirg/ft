import Immutable from 'immutable'

import Store from 'lib/src/flux/store'

import * as constants from 'lib/src/core/constants'

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

  handleAction( action ) {
    switch (action.type) {
      default:
        return this.state
    }
  }

}
