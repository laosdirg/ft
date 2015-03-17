import flux from 'flux'
import Immutable from 'immutable'

//------------------------------------------------------------------------------

export class Dispatcher extends flux.Dispatcher {

  dispatch( action ){
    console.log( "Action dispatched!", action )

    if ( !action.type ) {
      throw new Error( "No action type given. Action payload must contain type prop." )
    }

    super.dispatch( action )
  }

}
