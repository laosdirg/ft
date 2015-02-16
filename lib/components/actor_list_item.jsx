import React from 'react';

import * as actorTypeStore from '../stores/actor_type_store'

import ActorList from './actor_list.jsx!'

//------------------------------------------------------------------------------

export default class ActorListItem extends React.Component {

  constructor( props ) {
    super( props )

    this.state = {
      actorTypes: actorTypeStore.getAll()
    }
  }

  render() {
    return (
      <div>
        <p>{ this.props.navn } ({ this.state.actorTypes[ this.props.typeid ]})</p>
      </div>
    );
  }

}
