/**
 * Create a mixin for components
 * Perf: This bad boy should perhaps make sure two states emitting change at same
 * dispatch only triggers a single udpate?
 */
export default {

    getInitialState() {
      return this.getStateFromStores()
    },

    // when stores change, we must set state
    handleStoreChanged() {
      if ( !this.isMounted() ) throw "not mounted dafuq";

      this.setState( this.getStateFromStores() )
    },

    // attach listeners on mount
    componentDidMount() {
      let stores = this.constructor.stores
      for (let key in stores) {
        stores[ key ].addChangeListener( this.handleStoreChanged )
      }
    },

    // remove listeners before unmount
    componentWillUnmount() {
      let stores = this.constructor.stores
      for (let key in stores) {
        stores[ key ].removeChangeListener( this.handleStoreChanged )
      }
    },

  }
