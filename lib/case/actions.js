import Dispatcher from 'lib/core/dispatcher'

export function loadCases( ) {
  Dispatcher.dispatch({
    action: 'CASE_LOAD_SUCCES'
  })
}
