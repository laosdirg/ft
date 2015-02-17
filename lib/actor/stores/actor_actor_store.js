import Immutable from 'immutable'

import dispatcher from 'lib/core/dispatcher'
import Store from 'lib/flux/store'

import testdata from 'data/actor_actor'

//------------------------------------------------------------------------------

class actorActorStore extends Store {
  getInitialState() {
    let state = Immutable.Map()

    testdata.value.map( item => {
      let relation = {
        actor: item.tilaktoerid,
        type: item.rolleid,
      }
      state = state.update( item.fraaktoerid, Immutable.List(), list => list.push( relation ))
    })

    return state
  }

  getFor( key ) {
    return this.state.get( key, Immutable.List() )
  }

}

export const actorActorStore = new actorActorStore( dispatcher )
export default actorActorStore
