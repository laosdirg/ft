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
    return { actor: actorStore.get( this.props.actorId )
           , type: actorTypeStore.getFor( this.props.actorId )
           , actors: actorActorStore.getFor( this.props.actorId ).map(rel => {
               let actor = actorStore.get( rel.get('tilaktørid') )
               actor = actor.set( 'type', actorTypeStore.getFor( actor.get('typeid') ) )
               return actor
             })
           }
  },

  render() {
    if (!this.state.actor) return <p>Loading</p>
    return (
      <App>
        <img src={this.state.actor.getIn(["biografi", "pictureMiRes", 0])} />
        <h1>Nicolai Wammen <span className="Label ministertitel">Forsvarsminister</span></h1>

        <section>
          <h1>Medlem af</h1>
          <ul className="Labels">
            <li><a href="#">Folketinget</a></li>
            <li><a href="#">Socialdemokratiet</a></li>
            <li className="udvalg"><a href="#">Udenrigsudvalget</a></li>
            <li className="udvalg"><a href="#">Finansudvalget</a></li>
            <li className="kommission"><a href="#">Dansk Interparlamentarisk Gruppes bestyrelse</a></li>
          </ul>
        </section>

        <section>
          <h1>Lovforslag</h1>
        </section>

        <section>
          <h1>§ 20-spørgsmål</h1>
          <ul>
            <li><span className="Label">Modtaget</span> <a href="#"><span className="Label nummer">S 819</span> Om artiklen »Endnu en officer kendte til video fra tortursag«.</a></li>
            <li><span className="Label">Modtaget</span> <a href="#"><span className="Label nummer">S 1065</span> Om Borris Skydeterræn.</a></li>
            <li><span className="Label">Modtaget</span> <a href="#"><span className="Label nummer">S 978</span> Om øvelsesterrænet ved Sønderborg Kaserne.</a></li>
          </ul>
        </section>

        {/*<h2>Aktør: {this.state.actor.get('navn')}, type: {this.state.type}</h2>
        <h3>Relationer</h3>
        <ActorList actors={this.state.actors}  />*/}

      </App>
    );
  },

})

export default ActorPage
