import dispatcher from 'lib/core/dispatcher'

import Store from 'lib/flux/store'

class FilterStore extends Store {

  getFilters() {
    return this.state
  }

  addFilter( filter ) {
    this.state.set(filter, filter)
  }

  removeFilter() {
    this.state.delete(filter)
  }

  handleAction( payload ) {
    switch (payload.action) {
      case 'APPLY_FILTER':
        console.log(this.state)
        return this.state.set(payload, payload)
      default:
        return this.state
    }
  }
}

export const filterStore = new FilterStore( dispatcher )
export default filterStore

