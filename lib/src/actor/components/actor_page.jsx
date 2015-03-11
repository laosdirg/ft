import React from 'react/addons'

import StoreMixin from 'lib/src/flux/store_mixin'

import dispatcher from 'lib/src/core/dispatcher'
import { ActorStore } from '../stores/actor_store'
import { ActorTypeStore } from '../stores/actor_type_store'

import App from 'lib/src/core/components/app.jsx!'
import ActorList from './actor_list.jsx!'

//------------------------------------------------------------------------------

export const ActorPage = React.createClass({

  /**
   * Objects which will have their properties merged into this class
   *
   * Lifecycle methods that occur in both this class and mixins will be run in
   * order, starting with the mixins and ending with those defined in this class
   */
  mixins: [
    /**
     * Implements shouldComponentUpdate() such that component wont be rendered
     * if props and state are unchanged (using a shallow comparison).
     *
     * This is simply an optimization
     */
    React.addons.PureRenderMixin,
    /**
     * Implements componentDidMount() which sets up change listeners on stores,
     * as well as componentWillUnmount() which destroys the listeners.
     *
     * Whenever a store fires a change event, getStateFromStores() will be
     * invoked, so any class using this mixin should implement that method
     */
    StoreMixin,
  ],

  /**
   * The statics object will be merged into the class contructor.
   *
   * That means it will be available on this.contructor in this class
   */
  statics: {
    // This array contains the stores that should be listened for changes on
    stores: [ ActorStore, ActorTypeStore ],
  },

  getStateFromStores() {
    return {
      actor: dispatcher.get(ActorStore).get( this.props.actorId ),
      type: dispatcher.get(ActorTypeStore).getFor( this.props.actorId ),
    }
  },

  /**
   * Render the component
   *
   * This method should ONLY use state and props. Not e.g. read directly from a
   * store. This is needed in order to know when to re-render.
   */
  render() {
    if (!this.state.actor) return <p>Loading</p>
    return (
      <App>
        <img src={this.state.actor.getIn(["biografi", "pictureMiRes", 0])} />
        <h1>{this.state.actor.get('name')}<span className="Label ministertitel">Forsvarsminister</span></h1>

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
