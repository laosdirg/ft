import React from 'react/addons'

import StoreMixin from 'lib/flux/store_mixin'

import App from 'lib/core/components/app.jsx!'

import ActorList from './actor_list.jsx!'
import FilterList from './filter_list.jsx!'

import actorStore from '../stores/actor_store'

//------------------------------------------------------------------------------

export const ActorsPage = React.createClass({

  mixins: [ React.addons.PureRenderMixin, StoreMixin ],

  statics: {
    stores: [ actorStore ]
  },

  getStateFromStores() {
    return {
      actors: actorStore.getAll()
    }
  },

  render() {
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
        </div>
      </App>
    );
  },

})

export default ActorsPage
