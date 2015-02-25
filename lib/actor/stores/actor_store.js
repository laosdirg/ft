import Immutable from 'immutable'

import dispatcher from 'lib/core/dispatcher'
import Store from 'lib/flux/store'

//------------------------------------------------------------------------------

const Actor = new Immutable.Record({
  id: '',
  name: 'derp'
})

class ActorStore extends Store {
  get( id ) {
    return this.state.get( id )
  }

  getAll() {
    return this.state.toList()
  }

  handleAction( payload ) {
    switch (payload.action) {
      case 'ACTOR_LOAD_SUCCESS':
        return payload.actors.reduce(
          (state, actor) => state.set( actor.id, Immutable.fromJS(actor) ),
          this.state
        )

      default:
        return this.state
    }
  }
}

export const actorStore = new ActorStore( dispatcher )
export default actorStore
