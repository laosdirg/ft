/**
 * Store Listener Mixin
 *
 * Usage:
 *   React.createClass({
 *     mixins: [ StoreMixin ]
 *     statics: { stores: [ store1, store2 ] }
 *     getStateFromStores(){
 *       return { a: store1.foo(), b: store2.bar() }
 *     }
 *     ...
 */

export default {

  getInitialState() {
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
      //
      stores[ key ].addChangeListener( this.handleStoreChanged )
    }
  },

  /**
   * Destroy change listeners before component unmounts
   */
  componentWillUnmount() {
    let stores = this.constructor.stores
    for (let key in stores) {
      stores[ key ].removeChangeListener( this.handleStoreChanged )
    }
  },

}
