import React from 'react';

import * as actorActions from '../actions'

import * as actorTypeStore from '../stores/actor_type_store'

//------------------------------------------------------------------------------

export const FilterList = React.createClass({

  getInitialState(){
    return {
      actorTypes: actorTypeStore.getAll()
    }
  },

  handleChange(event){
    let value = event.value
    actorActions.changeSomething( value )
  },

  render() {
    return (
      <ol>
        {this.state.actorTypes.map( (actortype, i) => {
          return <li key={i}><input type="checkbox" onChange={this.handleChange}>{ actortype }</input></li>;
        })}
      </ol>
    );
  }
});

export default FilterList
