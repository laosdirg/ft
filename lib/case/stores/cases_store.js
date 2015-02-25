import Immutable from 'immutable'

import Store from 'lib/flux/store'
import dispatcher from 'lib/core/dispatcher'

import casedata from 'data/cases'

class CasesStore extends Store {
  getInitialState() {
    let state = new Immutable.Map()

    casedata.value.map( x => {
      state = state.set(x.id, Immutable.fromJS(x))
    })
    return state
  }

  getAll() {
    return this.state
  }

  handleAction( action ) {
    switch ( action.type ) {
      case 'CASES_LOAD_SUCCES':
        let state = action.cases.map( casedata => {
          return casedata
        })
        return state
      case 'APPLIED_FILTER':
        return this.state
      default:
        return this.state
    }
  }
}

export const casesStore = new CasesStore( dispatcher )
export default casesStore
