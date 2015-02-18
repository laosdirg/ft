/**
 * Store class
 */

import Immutable from 'immutable'

import ChangeEmitter from 'lib/change_emitter'

export default class Store extends ChangeEmitter {

  constructor( dispatcher ) {
    super()

    // TODO: Warn on direct change after this
    this.state = this.getInitialState()

    this.DISPATCH_TOKEN = dispatcher.register( payload => {
      let nextState = this.handleAction( payload )

      if ( false === (nextState instanceof Immutable.Iterable )) {
        throw "Store handler didnt return new state";
      }

      if ( nextState !== this.state ) {
        this.state = nextState
        console.log('Store state updated', this.state.toJS())

        this.emitChange( this.state )
      }
    })
  }

  getInitialState(){
    return Immutable.Map()
  }

  handleAction(){
    return this.state
  }

}
