import xhr from 'lib/shared/core/xhr'

export function loadCases( casetypeid ) {
  this.dispatch({
    type: 'CASES_LOAD_BEGIN',
    casetypeid: casetypeid
  })

  let req = '/api/Sag?inlinecount=allpages&$filter=typeid eq ' + casetypeid

  xhr.request(req).then( result => {
    let cases = result.value
    return this.dispatch({
      type: 'CASES_LOAD_SUCCES',
      cases: cases
    })
  }, error => {
    return this.dispatch({
      type: 'CASES_LOAD_FAIL'
    })
  })
}

export function loadCase( id ) {
  this.dispatch({
    type: 'CASE_LOAD_BEGIN',
    caseid: id
  })
}

export function applyFilter( filter ) {
  this.dispatch({
    type: 'FILTER_APPLIED',
    filter: filter
  })
}
