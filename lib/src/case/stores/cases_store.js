import Immutable from 'immutable'

import Store from 'lib/src/flux/store'

export class CasesStore extends Store {
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
      case 'CASE_LOAD_SUCCES':
        return this.state
      case 'APPLIED_FILTER':
        return this.state
      default:
        return this.state
    }
  }
}
