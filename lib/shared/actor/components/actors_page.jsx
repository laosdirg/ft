import React from 'react/addons'

import ActorList from './actor_list.jsx!'
import FilterList from './filter_list.jsx!'

import { ActorStore } from '../stores/actor_store'

import * as actorActions from '../actions'

import { Mixin as FluxMixin } from 'laosdirg-flux/integrations/react'

//------------------------------------------------------------------------------

export const ActorsPage = React.createClass({

  mixins: [ FluxMixin, React.addons.PureRenderMixin ],

  statics: {
    stores: [ ActorStore ]
  },

  getStateFromStores() {
    const actors = this.getStore(ActorStore)

    return {
      actors: actors.getList('MAIN')
        .update('items', list => list.map(actors.get))
    }
  },

  handleClick() {
    this.action(actorActions.loadActors, 'MAIN', null, this.state.actors.get('items').size)
  },

  render() {
    return (
      <div>
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
      </div>
    );
  },

})
