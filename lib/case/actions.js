import Dispatcher from 'lib/core/dispatcher'
import xhr from 'lib/core/xhr'

export function loadCases( filterid ) {
  Dispatcher.dispatch({
    type: 'CASES_LOAD_BEGIN',
    filterid: filterid
  })

  let req = '/api/Sag?inlinecount=allpages&$filter=typeid%20eq%20' + filterid

  xhr.request(req).then( result => {
    let cases = result.value

    return ({
      type: 'CASES_LOAD_SUCCES',
      cases: cases
    })
  }, error => {
    return ({
      type: 'CASE_LOAD_FAIL'
    })
  })
}

export function applyFilter( filter, id ) {
  Dispatcher.dispatch({
    type: 'FILTER_APPLIED',
    filter: filter
  })
}
