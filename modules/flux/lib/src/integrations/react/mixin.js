import { CONTEXT_TYPES } from './constants'

import React from 'react'

/*
contexts:
 * store
  - getStore
  - waitFor
 * component
   - getStore
 * action
   - getStore
   - dispatch
*/

export const Mixin = {

  // the mixin works only on a valid flux context
  contextTypes: CONTEXT_TYPES,

  // return instance of given store
  getStore( Store ) {
    // TODO
    if (this.constructor.stores.indexOf(Store) < 0) {
      console.warn('You are using a store that is not being listened to for changes!')
    }

    return this.context.flux.getStore(Store)
  },

  // execute action creator on dispatcher instance
  action( actionCreator, ...args ){
    actionCreator.apply(this.context.flux._actionContext, args)

    return {
      then() {
        throw "Do not depend on action timings in components."
      }
    }
  },

  // Store listeners -----------------------------------------------------------
  getInitialState() {
    if (!this.constructor.stores) return null
    return this.getStateFromStores()
  },

  // when stores change, we must set state
  handleStoreChanged() {
    if ( !this.isMounted() ) {
      throw new Error( "Store change event listener fired, but component is not mounted (det sker bare ikke Lars Krimi)" );
    }

    // PERF: This bad boy should debounce setState untill dispatch is over
    // PERF: Seriosuly; right now it rerenders the component once per store
    this.setState( this.getStateFromStores() )
  },

  /**
   * Attach change listeners when component mounts
   */
  componentDidMount() {
    // stores are specified in component's statics
    let stores = this.constructor.stores
    for (let key in stores) {
      this.getStore(stores[ key ]).addChangeListener( this.handleStoreChanged )
    }
  },

  /**
   * Destroy change listeners before component unmounts
   */
  componentWillUnmount() {
    let stores = this.constructor.stores
    for (let key in stores) {
      this.getStore(stores[ key ]).removeChangeListener( this.handleStoreChanged )
    }
  },
}
