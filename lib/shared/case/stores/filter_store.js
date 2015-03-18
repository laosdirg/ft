import {Store} from 'laosdirg-flux'

export class FilterStore extends Store {

  getInitialState() {
    return {
      filter: ''
    }
  }

  getFilters() {
    return this.state.get('filter')
  }

  handleAction( action ) {
    switch (action.type) {
      case 'FILTER_APPLIED':
        return this.state.set('filter', action.filter)
      default:
        return this.state
    }
  }
}
