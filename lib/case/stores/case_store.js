import Immutable from 'immutable'

import Store from 'lib/flux/store'
import dispatcher from 'lib/core/dispatcher'

class CaseStore extends Store {
  getItem() {
    return this.state
  }

  handleAction( action ) {
    switch ( action.type ) {
      case 'CASE_LOAD_SUCCES':
        let state = Immutable.fromJS(action.caseitem)
        return state
      default:
        return this.state
    }
  }
}

export const caseStore = new CaseStore( dispatcher )
export default caseStore
