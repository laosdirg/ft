import React from 'react/addons'

import StoreMixin from 'lib/flux/store_mixin'

import App from 'lib/core/components/app.jsx!'

import ActorList from './actor_list.jsx!'
import FilterList from './filter_list.jsx!'

import actorStore from '../stores/actor_store'
import * as actorActions from '../actions'

//------------------------------------------------------------------------------

export const ActorsPage = React.createClass({

  mixins: [ React.addons.PureRenderMixin, StoreMixin ],

  statics: {
    stores: [ actorStore ]
  },

  getStateFromStores() {
    return {
      actors: actorStore.getList('MAIN').update('items', list => list.map(actorStore.get.bind(actorStore)))
    }
  },

  handleClick() {
    actorActions.loadActors('MAIN', null, this.state.actors.size)
  },

  render() {
    console.log(this.state.actors.toJS())
    return (
      <App>
        <div>
          <FilterList />
        </div>
        <div>
          <h2>Aktører</h2>
          <div className="Filters">

          </div>
          <ActorList actors={this.state.actors} />
          <button type="button" onClick={this.handleClick}>Load more</button>
        </div>
      </App>
    );
  },

})

export default ActorsPage
