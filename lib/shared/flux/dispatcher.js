import flux from 'flux'
import Immutable from 'immutable'

import { ActorStore } from 'lib/shared/actor/stores/actor_store'
import { ActorActorStore } from 'lib/shared/actor/stores/actor_actor_store'
import { ActorTypeStore } from 'lib/shared/actor/stores/actor_type_store'
import { ActorFilterStore } from 'lib/shared/actor/stores/actor_filter_store'

import { CaseStore } from 'lib/shared/case/stores/case_store'
import { CasesStore } from 'lib/shared/case/stores/cases_store'
import { CaseTypeStore } from 'lib/shared/case/stores/casetype_store'
import { FilterStore } from 'lib/shared/case/stores/filter_store'

import { RouteStore } from 'lib/shared/routing/store'

// in order to isolate stores between requests on the server-side, the Dispatcher and stores classes are instantiated per request
export class Dispatcher extends flux.Dispatcher {

  constructor(){
    super()

    this._stores = Immutable.Map()

    this.addStore(ActorStore)
    this.addStore(ActorTypeStore)
    this.addStore(ActorFilterStore)

    this.addStore(CaseStore)
    this.addStore(CasesStore)
    this.addStore(CaseTypeStore)
    this.addStore(FilterStore)

    this.addStore(RouteStore)
  }

  addStore(Store){
    this._stores = this._stores.set(Store.name, new Store( this ))
  }
  get(Store){
    if (!this._stores.has(Store.name)) throw "Store not registered"
    return this._stores.get(Store.name)
  }

  dispatch(action){
    if (!action.type) {
      throw new Error("No action type given")
    }

    console.log("Action dispatched!", action)

    super.dispatch(action)
  }

}

export default new Dispatcher()
