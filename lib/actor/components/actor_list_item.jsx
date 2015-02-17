import React from 'react/addons'

import Anchor from 'lib/routing/components/anchor.jsx!'

import * as actorTypeStore from '../stores/actor_type_store'
import * as actorActorStore from '../stores/actor_actor_store'
import ActorList from './actor_list.jsx!'

//------------------------------------------------------------------------------

export const ActorListItem = React.createClass({

  propTypes: {},

  //----------------------------------------------------------------------------

  mixins: [ React.addons.PureRenderMixin ],

  getInitialState(){
    return { type: actorTypeStore.getFor( this.props.id )
           , actors: actorActorStore.getFor( this.props.id )
           }
  },

  render() {
    return (
      <div>
        <p><Anchor href="#actors/{ this.props.id }">{ this.props.navn }</Anchor> ({ this.state.type })</p>
        {this.state.actors.map( (actor, i) => {
          return <p key={i}> * {actor.actor} ({actor.type})</p>
        })}
      </div>
    )
  },

})

export default ActorListItem
