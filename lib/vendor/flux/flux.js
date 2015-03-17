import {Dispatcher} from './dispatcher'

import Immutable from 'immutable'

//------------------------------------------------------------------------------

export class Flux {
  constructor(){
    const stores = this.getStores()

    this.dispatcher = new Dispatcher()

    // instantiate stores and store their references
    this._stores = Immutable.Map( stores.map( Store => [ Store.name, new Store( this.dispatcher )]) )
  }

  getStore(Store){
    if (!this._stores.has(Store.name)) {
      throw "Store not registered"
    }

    return this._stores.get(Store.name)
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
