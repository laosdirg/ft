import Immutable from 'immutable'

import dispatcher from 'lib/core/dispatcher'
import Store from 'lib/flux/store'

import testdata from 'data/actor_types'

//------------------------------------------------------------------------------

class ActorTypeStore extends Store {
  getInitialState() {
    let state = Immutable.Map()

    testdata.value.map( x => {
      state = state.set(x.id, x.type)
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
