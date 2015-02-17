import React from 'react/addons'

import StoreMixin from 'lib/flux/store_mixin'

import actorStore from '../stores/actor_store'
import actorTypeStore from '../stores/actor_type_store'
import actorActorStore from '../stores/actor_actor_store'

import App from 'lib/core/components/app.jsx!'
import ActorList from './actor_list.jsx!'

//------------------------------------------------------------------------------

export const ActorPage = React.createClass({

  mixins: [ React.addons.PureRenderMixin, StoreMixin ],

  statics: {
    stores: [ actorStore, actorTypeStore, actorActorStore ],
  },

  getStateFromStores() {
    return { type: actorTypeStore.getFor( this.props.actorId )
           , actors: actorActorStore.getFor( this.props.actorId ).map(rel => actorStore.get( rel.actor ))
           }
  },

  render() {
    return (
      <App>
        <h2>Aktør: {this.props.actorId}, type: {this.state.type}</h2>
        <ActorList actors={this.state.actors}  />
      </App>
    );
  },

})

export default ActorPage
