import Immutable from 'immutable'

import Store from 'lib/src/flux/store'

import testdata from 'data/actor_types'

//------------------------------------------------------------------------------

export class ActorTypeStore extends Store {
  getInitialState() {
    let state = new Immutable.Map()

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
