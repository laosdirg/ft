import flux from 'flux'
import Immutable from 'immutable'

import { ActorStore } from 'lib/src/actor/stores/actor_store'
import { ActorActorStore } from 'lib/src/actor/stores/actor_actor_store'
import { ActorTypeStore } from 'lib/src/actor/stores/actor_type_store'
import { ActorFilterStore } from 'lib/src/actor/stores/actor_filter_store'

import { CaseStore } from 'lib/src/case/stores/case_store'
import { CasesStore } from 'lib/src/case/stores/cases_store'
import { CaseTypeStore } from 'lib/src/case/stores/casetype_store'
import { FilterStore } from 'lib/src/case/stores/filter_store'

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
  }

  addStore(Store){
    this._stores = this._stores.set(Store.name, new Store( this ))
  }
  get(Store){
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
