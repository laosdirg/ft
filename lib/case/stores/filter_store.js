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

  handleAction( payload ) {
    switch (payload.action) {
      case 'FILTER_APPLIED':
        let state = payload.filter
        return state
      default:
        return this.state
    }
  }
}

export const filterStore = new FilterStore( dispatcher )
export default filterStore
