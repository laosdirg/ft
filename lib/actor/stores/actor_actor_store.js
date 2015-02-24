import Immutable from 'immutable'

import dispatcher from 'lib/core/dispatcher'
import Store from 'lib/flux/store'

//------------------------------------------------------------------------------

class ActorActorStore extends Store {

  getFor( key ) {
    return this.state.get( key, new Immutable.Set() ).toList()
  }

  handleAction( payload ) {
    switch (payload.action) {
      case 'ACTOR_LOAD_SUCCESS':
        return this.state.update(
          payload.actorId,
          new Immutable.Set(),
          set => set.union( new Immutable.Set(Immutable.fromJS(payload.relationships)) )
        )

      default:
        return this.state
    }
  }

}

export const actorActorStore = new ActorActorStore( dispatcher )
export default actorActorStore
