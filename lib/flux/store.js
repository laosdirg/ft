/**
 * Immutable Store
 */

import Immutable from 'immutable'
import ChangeEmitter from 'lib/change_emitter'

export default class Store extends ChangeEmitter {

  constructor( dispatcher ) {
    super()

    // Initialize state
    let state = this.getInitialState()

    // Ensure state is not mutated directly; mutate only in action handler
    // (basically the same as `this.state = state` but with mutation-warning)
    Object.defineProperty(this, 'state', {
      enumerable: true,
      get(){
        return state
      },
      set(){
        throw new Error( "Do not set store state directly" )
      },
    })

    // Register action handler, returning dispatch token (used with waitFor)
    this.DISPATCH_TOKEN = dispatcher.register( payload => {
      // Compute next state. Action handlers must return new state object
      let nextState = this.handleAction( payload )

      // Ensure validity of returned state; it must be an immutable collection
      let isStateValid = nextState instanceof Immutable.Iterable
      if ( !isStateValid ) {
        throw new Error("Store handler returned invalid state")
      }

      // Check for state change, which is easy, thanks to immutable collections
      let hasStateChanged = nextState !== this.state
      if ( hasStateChanged ) {
        // If so, update state and emit change event
        state = nextState
        console.log('Store changed', state.toJS())
        this.emitChange()
      }
    })
  }

  /**
   * Override this to initialize to something other than an empty map
   */
  getInitialState(){
    return new Immutable.Map()
  }

  /**
   * All actions from dispatcher go through here
   *
   * Override this to handle actions. Always return new state!
   */
  handleAction(){
    return this.state
  }

}
