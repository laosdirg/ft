import React from 'react/addons'

import Anchor from 'lib/routing/components/anchor.jsx!'

import * as actorTypeStore from '../stores/actor_type_store'
import * as actorActorStore from '../stores/actor_actor_store'
import ActorList from './actor_list.jsx!'

//------------------------------------------------------------------------------

export default React.createClass({

  displayName: 'ActorListItem',

  propTypes: {},

  //----------------------------------------------------------------------------

  mixins: [ React.addons.PureRenderMixin ],

  getInitialState(){
    return { actorTypes: actorTypeStore.getAll()
           , actors: actorActorStore.getFor( this.props.id )
           }
  },

  render() {
    return (
      <div>
        <p><Anchor route="actors">{ this.props.navn }</Anchor> ({ this.state.actorTypes[ this.props.typeid ]})</p>
        {this.state.actors.map(actor => {
          return <p> * {actor.actor} ({actor.type})</p>
        })}
      </div>
    )
  },

})
