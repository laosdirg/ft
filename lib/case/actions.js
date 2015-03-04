import Dispatcher from 'lib/core/dispatcher'
import xhr from 'lib/core/xhr'

export function loadCases( casetypeid ) {
  Dispatcher.dispatch({
    type: 'CASES_LOAD_BEGIN',
    casetypeid: casetypeid
  })

  let req = '/api/Sag?inlinecount=allpages&$filter=typeid eq ' + casetypeid
  
  xhr.request(req).then( result => {
    let cases = result.value
    return Dispatcher.dispatch({
      type: 'CASES_LOAD_SUCCES',
      cases: cases
    })
  }, error => {
    return Dispatcher.dispatch({
      type: 'CASES_LOAD_FAIL'
    })
  })
}

export function loadCase( id ) {
  Dispatcher.dispatch({
    type: 'CASE_LOAD_BEGIN',
    caseid: id
  })
}

export function applyFilter( filter ) {
  Dispatcher.dispatch({
    type: 'FILTER_APPLIED',
    filter: filter
  })
}
