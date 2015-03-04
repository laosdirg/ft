import React from 'react/addons'

import StoreMixin from 'lib/flux/store_mixin'

import * as actorActions from 'lib/actor/actions'
import actorStore from 'lib/actor/stores/actor_store'

import Typeahead from './typeahead.jsx!'

//------------------------------------------------------------------------------

export const SearchContainer = React.createClass({

  mixins: [ React.addons.PureRenderMixin, StoreMixin ],

  statics: {
    stores: [ actorStore ],
  },

  getInitialState(){
    return {query:''}
  },

  getStateFromStores() {
    if (this.state && this.state.query !== '') {
      return { actors: actorStore.getList('SEARCH').update('items', list => list.map(actorStore.get.bind(actorStore)))
             }
    }
  },

  handleChange(event){
    actorActions.loadActors('SEARCH', {query: event.target.value})

    this.setState({query:event.target.value})
  },

  render() {
    return (
      <div>
        <Typeahead onChange={this.handleChange} value={this.state.query} />
        <div className="Search-results">
          {!this.state.actors || this.state.actors.get('isLoading') ? 'Loading' : this.state.actors.get('items').map(actor =>
            <span>{actor}</span>
          )}
        </div>
      </div>
    )
  },

})

export default SearchContainer
