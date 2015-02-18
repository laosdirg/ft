export class ChangeEmitter {
  constructor() {
    this._listeners = []
  }

  addChangeListener( listener ) {
    this._listeners.push( listener )
  }

  removeChangeListener( listener ) {
    let index = this._listeners.indexOf( listener )
    this._listeners.splice( index, 1 )
  }

  emitChange() {
    this._listeners.forEach(listener => listener())
  }
}

export default ChangeEmitter
