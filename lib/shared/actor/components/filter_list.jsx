import React from 'react';

import StoreMixin from 'lib/vendor/flux/store_mixin'

import dispatcher from 'lib/shared/flux/dispatcher'
import { ActorTypeStore } from '../stores/actor_type_store'
import { ActorFilterStore } from '../stores/actor_filter_store'

import FilterListItem from './filter_list_item.jsx!'

//------------------------------------------------------------------------------

export const FilterList = React.createClass({

  mixins: [ React.addons.PureRenderMixin, StoreMixin ],

  statics: {
    stores: [ ActorTypeStore, ActorFilterStore ]
  },

  getStateFromStores() {
    return {
      actorTypes: dispatcher.get(ActorTypeStore).getAll(),
      filters: dispatcher.get(ActorFilterStore).getFilters()
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
