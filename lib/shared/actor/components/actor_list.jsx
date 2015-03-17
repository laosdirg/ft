import React from 'react'

import classNames from 'lib/shared/utils/class_names'

import ActorListItem from './actor_list_item.jsx!'

//------------------------------------------------------------------------------

export const ActorList = React.createClass({

  render() {
    let className = classNames({
      isLoading: this.props.actors.get('isLoading'),
    })
    return (
      <ol className={className}>
        {this.props.actors.get('items').map( (actor, i) => {
          return <li key={i}><ActorListItem actor={actor} /></li>
        })}
      </ol>
    );
  },

})

export default ActorList
