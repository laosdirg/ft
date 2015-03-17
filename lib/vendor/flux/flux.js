import {Dispatcher} from './dispatcher'

import Immutable from 'immutable'

//------------------------------------------------------------------------------

export class Flux {
  constructor(){
    const stores = this.getStores()

    this.dispatcher = new Dispatcher()

    // instantiate stores and store their references
    this._stores = Immutable.Map( stores.map( Store => [ Store.name, new Store( this.dispatcher )]) )

    this._actionContext = {
      dispatch: this.dispatcher.dispatch.bind(this.dispatcher),
      action: this.action.bind(this),
    }
  }

  getStore(Store){
    if (!this._stores.has(Store.name)) {
      throw "Store not registered"
    }

    return this._stores.get(Store.name)
  }

  action( actionCreator, ...args ){
    return actionCreator.apply( this._actionContext, args )
  }

  /**
   * Serialize state of all registered stores
   */
  serialize() {
    let dehydrated = {}
    this._stores.forEach(( store, name ) => {
      //dehydrated[key] = store.state.toJS()
    })

    return dehydrated
  }

}
