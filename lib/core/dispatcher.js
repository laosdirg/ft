import flux from 'flux'

class Dispatcher extends flux.Dispatcher {
  dispatch(...args){
    super.dispatch(...args)

    console.log("Action dispatched!", ...args)
  }
}

export default new Dispatcher()
