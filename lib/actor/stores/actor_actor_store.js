import Immutable from 'immutable'

import testdata from 'data/actor_actor'

let state = Immutable.Map()

testdata.value.map( item => {
  let relation = {
    actor: item.tilaktoerid,
    type: item.rolleid,
  }
  state = state.update( item.fraaktoerid, Immutable.List(), list => list.push( relation ))
})

//------------------------------------------------------------------------------

export function getFor( key ) {
  return state.get( key, Immutable.List() )
}
