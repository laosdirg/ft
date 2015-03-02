import Immutable from 'immutable'

import dispatcher from 'lib/core/dispatcher'
import Store from 'lib/flux/store'

import casetypes from 'data/casetypes'

//------------------------------------------------------------------------------

class CaseTypeStore extends Store {
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

export const caseTypeStore = new CaseTypeStore( dispatcher )
export default caseTypeStore
