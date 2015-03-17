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

const propTypes = {
  flux: React.PropTypes.shape({
    getStore: React.PropTypes.func,
  }),
}




export const FluxMixin = {
  propTypes: propTypes,

  contextTypes: propTypes,

  getStore( Store ) {
    // TODO
    if (this.constructor.stores.indexOf(Store) < 0) {
      console.warn('You are using a store that is not being listened to for changes!')
    }

    return this.context.flux.getStore(Store)
  },



  getInitialState() {
    if (!this.constructor.stores) return {}
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





export const FluxWrapperMixin = {
  childContextTypes: propTypes,

  getChildContext() {
    return {flux: this.props.flux}
  },
}
