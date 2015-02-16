import testdata from 'data/actor_types'

let actorTypes = {}

testdata.value.map( x => {
  actorTypes[x.id] = x.type
})

//------------------------------------------------------------------------------

export function getAll() {
  return actorTypes
}
