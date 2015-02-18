import flux from 'flux'

class Dispatcher extends flux.Dispatcher {
  dispatch(...args){
    console.log("Action dispatched!", ...args)
    
    super.dispatch(...args)
  }
}

export default new Dispatcher()
