import Immutable from 'immutable'

import Store from 'lib/src/flux/store'

import * as constants from '../constants'

//------------------------------------------------------------------------------

export class ActorActorStore extends Store {

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
