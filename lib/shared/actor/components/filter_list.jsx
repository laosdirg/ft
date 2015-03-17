import React from 'react';

import { ActorTypeStore } from '../stores/actor_type_store'
import { ActorFilterStore } from '../stores/actor_filter_store'

import FilterListItem from './filter_list_item.jsx!'
import {FluxMixin} from 'lib/vendor/flux/mixin'

//------------------------------------------------------------------------------

export const FilterList = React.createClass({

  mixins: [ FluxMixin, React.addons.PureRenderMixin ],

  statics: {
    stores: [ ActorTypeStore, ActorFilterStore ]
  },

  getStateFromStores() {
    return {
      actorTypes: this.getStore(ActorTypeStore).getAll(),
      filters: this.getStore(ActorFilterStore).getFilters()
    }
  },

  render() {
    return (
      <div>
        <div>
          {this.state.filters.map( filter => {
            return <span>{ filter }</span>
          })}
        </div>
        <ol>
          {this.state.actorTypes.map( (actortype, i) => {
            return <li key={i}><FilterListItem actortype={ actortype } /></li>;
          })}
        </ol>
      </div>
    );
  }
});

export default FilterList
