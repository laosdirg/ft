import React from 'react';

import StoreMixin from 'lib/flux/store_mixin'

import actorTypeStore from '../stores/actor_type_store'
import filterStore from '../stores/filter_store'

import FilterListItem from './filter_list_item.jsx!'

//------------------------------------------------------------------------------

export const FilterList = React.createClass({

  mixins: [ React.addons.PureRenderMixin, StoreMixin ],

  statics: {
    stores: [ actorTypeStore, filterStore ]
  },

  getStateFromStores() {
    return { 
      actorTypes: actorTypeStore.getAll(),
      filters: filterStore.getFilters()
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
