import Immutable from 'immutable'

import testdata from 'data/actor_types'

let state = Immutable.Map()

testdata.value.map( x => {
  state = state.set(x.id, x.type)
})

//------------------------------------------------------------------------------

export function getFor( key ) {
  return state.get( key )
}

export function getAll() {
  return state.toList()
}
