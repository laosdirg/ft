import Dispatcher from 'lib/core/dispatcher'
import xhr from 'lib/core/xhr'

import * as constants from 'lib/case/constants'

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

export function loadCase( caseid ) {
  Dispatcher.dispatch({
    type: 'CASE_LOAD_BEGIN',
    caseid: caseid
  })

  let req = '/api/SagAktør?$filter=sagid eq ' + caseid
  
  xhr.request(req).then( result => {
    let caseactor = result.value
    return Dispatcher.dispatch({
      type: 'CASE_LOAD_SUCCES',
      caseactor: caseactor
    })
  }, error => {
    return Dispatcher.dispatch({
      type: 'CASE_LOAD_FAIL'
    })
  })
}

export function loadCaseTypes() {
  Dispatcher.dispatch({
    type: constants.CASE_TYPE_LOAD_BEGIN,
  })

  let req = '/api/Sagstype?'
  
  xhr.request(req).then( result => {
    let casetypes = result.value
    return Dispatcher.dispatch({
      type: constants.CASE_TYPE_LOAD_SUCCESS,
      casetypes: casetypes
    })
  }, error => {
    return Dispatcher.dispatch({
      type: CASE_TYPE_LOAD_FAIL,
    })
  })
}

export function loadCaseActorRoles() {
  Dispatcher.dispatch({
    type: constants.CASE_ACTOR_ROLE_LOAD_BEGIN,
  })

  let req = '/api/SagAktørRolle?'
  
  xhr.request(req).then( result => {
    let caseactorroles = result.value
    return Dispatcher.dispatch({
      type: constants.CASE_ACTOR_ROLE_LOAD_SUCCESS,
      caseactorroles: caseactorroles
    })
  }, error => {
    return Dispatcher.dispatch({
      type: CASE_ACTOR_ROLE_LOAD_FAIL,
    })
  })
}

export function applyFilter( filter ) {
  Dispatcher.dispatch({
    type: 'FILTER_APPLIED',
    filter: filter
  })
}
