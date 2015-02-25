import flux from 'flux'

class Dispatcher extends flux.Dispatcher {
  dispatch(action){
    if (!action.type) {
      throw new Error("No action type given")
    }

    console.log("Action dispatched!", action)

    super.dispatch(action)
  }
}

export default new Dispatcher()
