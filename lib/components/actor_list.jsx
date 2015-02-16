import React from 'react'

import ActorListItem from './actor_list_item.jsx!'

//------------------------------------------------------------------------------

export default class ActorList extends React.Component {

  render() {
    return (
      <ol>
        {this.props.actors.map( (actor, i) => {
          return <li key={i}><ActorListItem {...actor } /></li>;
        })}
      </ol>
    );
  }

}
