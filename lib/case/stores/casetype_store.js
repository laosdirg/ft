import Immutable from 'immutable'

import dispatcher from 'lib/core/dispatcher'
import Store from 'lib/flux/store'

import casetypes from 'data/casetypes'

//------------------------------------------------------------------------------

class ActorTypeStore extends Store {
  getInitialState() {
    let state = new Immutable.Set()

    casetypes.value.map( x => {
      state = state.add(x)
    })

    return state
  }

  getFor( key ) {
    return this.state.get( key )
  }

  getAll() {
    return this.state.toList()
  }
}

export const actorTypeStore = new ActorTypeStore( dispatcher )
export default actorTypeStore
