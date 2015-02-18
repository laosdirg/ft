import React from 'react'

import ActorListItem from './actor_list_item.jsx!'

//------------------------------------------------------------------------------

export const ActorList = React.createClass({

  render() {
    return (
      <ol>
        {this.props.actors.map( (actor, i) => {
          return <li key={i}><ActorListItem actor={actor} /></li>
        })}
      </ol>
    );
  },

})

export default ActorList
