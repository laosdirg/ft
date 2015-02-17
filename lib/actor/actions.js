import dispatcher from 'lib/core/dispatcher'

export function changeSomething( value ){
  dispatcher.dispatch({
    action: 'something',
    value: value
  })
}