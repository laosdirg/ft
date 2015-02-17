import React from 'react';

import * as actorTypeStore from '../stores/actor_type_store'

import FilterListItem from './filter_list_item.jsx!'

//------------------------------------------------------------------------------

export const FilterList = React.createClass({

  getInitialState(){
    return {
      actorTypes: actorTypeStore.getAll()
    }
  },

  render() {
    return (
      <ol>
        {this.state.actorTypes.map( (actortype, i) => {
          return <li key={i}><FilterListItem actortype={ actortype } /></li>;
        })}
      </ol>
    );
  }
});

export default FilterList
