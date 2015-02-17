import _ from 'lodash';

/**
 * Create a mixin for components
 */
export function createStoreMixin( stores ) {
  let listeners = {};

  return {

    // initially state must be (requested and then) fetched from stores
    getInitialState() {
      let state = {};
      for (let key in stores) {
        state[ key ] = stores[ key ].state;
      }
      return state;
    },

    // when stores change, we must set state
    handleStoreChanged( key, storeState ) {
      // CONSIDER: if (this.isMounted()) ??
      if ( !this.isMounted() ) throw "not mounted dafuq";

      let nextState = {};
      nextState[ key ] = storeState,

      this.setState( nextState );
    },

    // attach listeners on mount
    componentDidMount() {
      for (let key in stores) {
        listeners[ key ] = state => this.handleStoreChanged( key, state );
        stores[ key ].addChangeListener( listeners[ key ]);
      }
    },

    // remove listeners before unmount
    componentWillUnmount() {
      for (let key in stores) {
        stores[ key ].removeChangeListener( listeners [ key ]);
      }
    },

  };
}
