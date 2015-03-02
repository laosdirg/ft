import Dispatcher from 'lib/core/dispatcher'
import xhr from 'lib/core/xhr'

export function loadCases( casetype ) {
  Dispatcher.dispatch({
    type: 'CASES_LOAD_BEGIN',
    casetype: casetype
  })

  let req = '/api/Sag?inlinecount=allpages&$filter=typeid eq ' + casetype
  
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
