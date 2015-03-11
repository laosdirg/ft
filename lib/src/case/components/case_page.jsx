import React from 'react'

import storeMixin from 'lib/src/flux/store_mixin'

import dispatcher from 'lib/src/core/dispatcher'
import { CasesStore } from '../stores/cases_store'

import App from 'lib/src/core/components/app.jsx!'
import CaseItem from './case_item.jsx!'

export const CasePage = React.createClass({

  mixins: [ storeMixin ],

  statics: {
    stores: [ CasesStore ]
  },

  getStateFromStores() {
    return { caseitem: dispatcher.get(CasesStore).getItem( this.props.caseId ) }
  },

  render() {
    return (
      <App>
        <CaseItem caseid={ this.props.caseId } caseitem={ this.state.caseitem } />


      </App>
    )
  }
})

export default CasePage
