import React from 'react/addons'

import StoreMixin from 'lib/vendor/flux/store_mixin'

import * as actorActions from '../../actor/actions'
import dispatcher from '../../flux/dispatcher'
import { ActorStore } from '../../actor/stores/actor_store'

import Typeahead from './typeahead.jsx!'
import Anchor from '../../routing/components/anchor.jsx!'

//------------------------------------------------------------------------------

export const SearchContainer = React.createClass({

  mixins: [ React.addons.PureRenderMixin, StoreMixin ],

  statics: {
    stores: [ ActorStore ],
  },

  getInitialState(){
    return {query:''}
  },

  getStateFromStores() {
    if (this.state && this.state.query !== '') {
      return { actors: dispatcher.get(ActorStore).getList('SEARCH').update('items', list => list.map(dispatcher.get(ActorStore).get.bind(dispatcher.get(actorStore))))
             }
    }
  },

  handleChange(event){
    actorActions.loadActors(dispatcher, 'SEARCH', {query: event.target.value})

    this.setState({query:event.target.value})
  },

  render() {
    let results = '';
    if (this.state.query) {
      results = (
        <div className="Search-results">
          {!this.state.actors || this.state.actors.get('isLoading') ? 'Loading' : this.state.actors.get('items').map(actor =>
            <p><Anchor href={"/actors/"+actor.get('id')}>{actor.get('name')}</Anchor></p>
          )}
        </div>
      )
    }
    return (
      <div>
        <Typeahead onChange={this.handleChange} value={this.state.query} />
        {results}
      </div>
    )
  },

})

export default SearchContainer
