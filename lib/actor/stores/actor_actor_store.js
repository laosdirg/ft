import Immutable from 'immutable'

import dispatcher from 'lib/core/dispatcher'
import Store from 'lib/flux/store'

import * as constants from '../constants'

//------------------------------------------------------------------------------

class ActorActorStore extends Store {

  getFor( key ) {
    return this.state.get( key, new Immutable.Set() ).toList()
  }

  handleAction( action ) {
    switch (action.type) {
      case constants.ACTOR_LOADED:
        return this.state.update(
          action.actorId,
          new Immutable.Set(),
          set => set.union( new Immutable.Set(Immutable.fromJS(action.relationships)) )
        )

      default:
        return this.state
    }
  }

}

export const actorActorStore = new ActorActorStore( dispatcher )
export default actorActorStore
