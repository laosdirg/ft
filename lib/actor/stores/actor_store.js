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
  getInitialState() {
    return {
      actors: {},
      queries: {},
    }
  }

  get( id ) {
    return this.state.getIn([ 'actors', id ])
    return this.state.get('actors').get(id)
    state.actors = {
      1: {id:1, name:'john'}
    }
    return state.actors[id]
  }

  getAll() {
    return this.state.get('actors').toList()
  }

  getList( identifier ) {
    if (!this.state.get('queries').has(identifier)) {
      return Immutable.List()
    }
    return this.state.getIn(['queries', identifier])
  }

  handleAction( action ) {
    switch (action.type) {
      case constants.ACTOR_LOADED:
        return this.state.setIn([ 'actors', action.actor.id ], Immutable.fromJS(action.actor))

      case constants.ACTORS_LOAD_BEGAN:
        if (!action.skip) {
          return this.state.deleteIn(['queries', action.identifier])
        }
        return this.state

      case constants.ACTORS_LOADED:
        let state = this.state
        action.actors.items.forEach(actor => {
          state = state.setIn([ 'actors', actor.id ], Immutable.fromJS(actor) )
        })
        if (action.skip) {
          state = state.updateIn(['queries', action.identifier], list => list.concat( Immutable.List(action.actors.items.map(actor => actor.id))))
        } else {
          state = state.setIn(['queries', action.identifier], Immutable.List(action.actors.items.map(actor => actor.id)))
        }
        return state

      default:
        return this.state
    }
  }
}

export const actorStore = new ActorStore( dispatcher )
export default actorStore
