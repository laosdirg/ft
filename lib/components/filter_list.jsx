import React from 'react';

import * as actorTypeStore from '../stores/actor_type_store'

//------------------------------------------------------------------------------

export default React.createClass({

  getInitialState(){
    return {
      actorTypes: actorTypeStore.getAll()
    }
  },

  render() {
    return (
      <ol>
        {this.props.actorTypes.map( (actortype, i) => {
          return <li key={i}>{ actortype }</li>;
        })}
      </ol>
    );
  }
});