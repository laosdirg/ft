import dispatcher from 'lib/core/dispatcher'

import Store from 'lib/flux/store'
import Immutable from 'immutable'

import testdata from 'data/actor_types'

import * as constants from '../constants'

class FilterStore extends Store {

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

export const filterStore = new FilterStore( dispatcher )
export default filterStore
