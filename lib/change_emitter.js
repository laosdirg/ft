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
    for (let listener of this._listeners) {
      listener( state )
    }
  }
}

export default ChangeEmitter
