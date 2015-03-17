import React from 'react/addons'

import StoreMixin from 'lib/vendor/flux/store_mixin'

import ActorList from './actor_list.jsx!'
import FilterList from './filter_list.jsx!'

import { ActorStore } from '../stores/actor_store'

import * as actorActions from '../actions'

import {FluxMixin} from 'lib/vendor/flux/mixin'

//------------------------------------------------------------------------------

export const ActorsPage = React.createClass({

  mixins: [ FluxMixin, React.addons.PureRenderMixin ],

  statics: {
    stores: [ ActorStore ]
  },

  getStateFromStores() {
    return {
      actors: this.getStore(ActorStore).getList('MAIN')
        .update('items', list => list.map(this.getStore(ActorStore).get.bind(this.getStore(ActorStore))))
    }
  },

  handleClick() {
    actorActions.loadActors(this.context.dispatcher, 'MAIN', null, this.state.actors.size)
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
          {/*<ActorList actors={this.state.actors} />*/}
          <button type="button" onClick={this.handleClick}>Load more</button>
        </div>
      </div>
    );
  },

})
