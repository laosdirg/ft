import Immutable from 'immutable'

import Store from 'lib/flux/store'
import dispatcher from 'lib/core/dispatcher'

class CasesStore extends Store {
  getAll() {
    return this.state
  }

  getItem( id ) {
    return this.state.get( id )
  }

  handleAction( action ) {
    switch ( action.type ) {
      case 'CASES_LOAD_SUCCES':
        let state = Immutable.Map()
        action.cases.map(caseitem => { state = state.set(caseitem.id, caseitem) })
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
