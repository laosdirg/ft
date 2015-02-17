import dispatcher from 'lib/core/dispatcher'

export function applyFilter( value ){
  dispatcher.dispatch({
    action: 'APPLY_FILTER',
    value: value
  })
}