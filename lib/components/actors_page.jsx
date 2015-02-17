import React from 'react';

import ActorList from './actor_list.jsx!'
import FilterList from './filter_list.jsx!'

//------------------------------------------------------------------------------

export default class ActorsPage extends React.Component {

  render() {
    return (
      <div>
        <FilterList />
      </div>
      <div>
        <h2>Aktører</h2>
        <div className="Filters">
          
        </div>
        <ActorList actors={this.props.actors} />
      </div>
    );
  }

}
