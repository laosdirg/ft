import Immutable from 'immutable'

import dispatcher from 'lib/core/dispatcher'
import Store from 'lib/flux/store'

import * as constants from '../constants'

//------------------------------------------------------------------------------

const Actor = new Immutable.Record({
  id: '',
  name: 'dxxxerp'
})

class ActorStore extends Store {
  get( id ) {
    return this.state.get( id )
  }

  getAll() {
    return this.state.toList()
  }

  handleAction( action ) {
    switch (action.type) {
      case constants.ACTOR_LOADED:
        return action.actors.reduce(
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
