import Immutable from 'immutable'

import Store from 'lib/vendor/flux/store'

import casetypes from 'data/casetypes'

//------------------------------------------------------------------------------

export class CaseTypeStore extends Store {
  getInitialState() {
    let state = Immutable.Map()
    casetypes.value.map( casetype => {
      state = state.set(casetype.type, casetype.id)
    })
    return state
  }

  getFor( type ) {
    return this.state.get( type )
  }

  getAll() {
    return this.state
  }
}
