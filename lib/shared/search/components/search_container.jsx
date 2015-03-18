import React from 'react/addons'

import * as actorActions from '../../actor/actions'
import { ActorStore } from '../../actor/stores/actor_store'
import { Mixin as FluxMixin } from 'laosdirg-flux/integrations/react'


import Typeahead from './typeahead.jsx!'
import Anchor from 'lib/vendor/routing/components/anchor.jsx!'

//------------------------------------------------------------------------------

export const SearchContainer = React.createClass({

  mixins: [ React.addons.PureRenderMixin, FluxMixin ],

  statics: {
    stores: [ ActorStore ],
  },

  getInitialState(){
    return {query:''}
  },

  getStateFromStores() {
    if (this.state && this.state.query !== '') {
      return { actors: this.getStore(ActorStore).getList('SEARCH').update('items', list => list.map(this.getStore(ActorStore).get.bind(this.getStore(ActorStore))))
             }
    } else {
      return {}
    }
  },

  handleChange(event){
    this.action(actorActions.loadActors, 'SEARCH', {query: event.target.value})

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
