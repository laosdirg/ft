import Immutable from 'immutable'

import Store from 'lib/vendor/flux/store'

//------------------------------------------------------------------------------

export class RouteStore extends Store {

  getInitialState(){
    return {
      route: Immutable.Map({
        name: '/actors'
      }),
    }
  }

  getRoute(){
    return this.state.get('route')
  }

  handleAction( action ) {
    switch (action.type) {
      case 'ROUTE_NAVIGATED':
        return this.state.set('route', Immutable.Map({
          name: action.route
        }))
      default:
        return this.state
    }
  }


}
