import Immutable from 'immutable'

import Store from 'lib/flux/store'
import dispatcher from 'lib/core/dispatcher'

import casedata from 'data/cases'

class CaseStore extends Store {

  getAll() {
    return this.state
  }

  getInitialState() {
    let state = Immutable.Map()

    casedata.value.map( x => {
      state = state.set(x.id, x.titel)
    })
    console.log(state)
    return this.state
  }

  handleAction( payload ) {
    switch ( payload.action ) {
      case 'CASE_LOAD_SUCCES':
        return this.state
      default:
        return this.state
    }
  }
}

export const CaseStore = new CaseStore( dispatcher )
export default CaseStore