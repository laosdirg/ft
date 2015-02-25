import dispatcher from 'lib/core/dispatcher'

import Store from 'lib/flux/store'

class FilterStore extends Store {

  getInitialState() {
    let state = ''
    return state
  }

  getFilters() {
    return this.state
  }

  handleAction( action ) {
    switch (action.type) {
      case 'FILTER_APPLIED':
        let state = action.filter
        return state
      default:
        return this.state
    }
  }
}

export const filterStore = new FilterStore( dispatcher )
export default filterStore
