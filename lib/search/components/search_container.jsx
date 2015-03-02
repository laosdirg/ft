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
    let query = ''
    if (this.state && this.state.query) query = this.state.query

    return { actors: actorStore.getList('SEARCH').map(actorStore.get.bind(actorStore))
           }
  },

  handleChange(event){
    this.setState({query:event.target.value})

    actorActions.loadActors('SEARCH', {query: event.target.value})
  },

  render() {
    return (
      <div>
        <Typeahead onChange={this.handleChange} value={this.state.query} />
        {!this.state.actors ? 'Loading' : this.state.actors.map(actor =>
          <span>{actor}</span>
        )}
      </div>
    )
  },

})

export default SearchContainer
