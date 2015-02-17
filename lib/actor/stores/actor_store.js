import Immutable from 'immutable'

import dispatcher from 'lib/core/dispatcher'
import Store from 'lib/flux/store'

import testdata from 'data/actors'

//------------------------------------------------------------------------------

class ActorStore extends Store {
  getInitialState() {
    let state = Immutable.Map()
    testdata.value.forEach(item => {
      state = state.set( item.id, item )
    })

    return state
  }

  get( id ) {
    return this.state.get( id )
  }

  getAll() {
    return this.state.toList()
  }

  handleAction( payload ) {
    switch (payload.action) {
      case 'ACTOR_LOAD_BEGIN':
        return this.state.setIn([ payload.actorId, 'loading' ],  true )

      case 'ACTOR_LOAD_SUCCESS':
        return this.state.set( payload.actor.id, payload.actor )

      default:
        return this.state
    }
  }
}

export const actorStore = new ActorStore( dispatcher )
export default actorStore
