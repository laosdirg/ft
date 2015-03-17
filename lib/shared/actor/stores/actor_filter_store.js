import Store from 'lib/vendor/flux/store'
import Immutable from 'immutable'

import testdata from 'data/actor_types'

import * as constants from '../constants'

export class ActorFilterStore extends Store {

  getInitialState() {
    let state = new Immutable.Map()

    testdata.value.map( x => {
      state = state.set(x.type, false)
    })

    return state
  }

  getFilters() {
    return this.state
  }

  handleAction( action ) {
    switch (action.type) {
      case 'APPLY_FILTER':
        return this.state.set(action.filter, true)
      case 'REMOVE_FILTER':
        return this.state.set(action.filter, false)
      default:
        return this.state
    }
  }
}
