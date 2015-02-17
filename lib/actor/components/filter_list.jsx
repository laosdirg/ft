import React from 'react';

import * as actorTypeStore from '../stores/actor_type_store'

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
          return <li key={i}>{ actortype }</li>;
        })}
      </ol>
    );
  }
});

export default FilterList
