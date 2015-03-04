import React from 'react'

import ActorListItem from './actor_list_item.jsx!'

//------------------------------------------------------------------------------

export const ActorList = React.createClass({

  render() {
    if (this.props.actors.get('isLoading')) {
      return <p>Loading</p>;
    }
    return (
      <ol>
        {this.props.actors.get('items').map( (actor, i) => {
          return <li key={i}><ActorListItem actor={actor} /></li>
        })}
      </ol>
    );
  },

})

export default ActorList
