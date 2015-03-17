import React from 'react'

import storeMixin from 'lib/vendor/flux/store_mixin'

import dispatcher from 'lib/shared/flux/dispatcher'
import { CasesStore } from '../stores/cases_store'

import App from 'lib/shared/core/components/app.jsx!'
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
      <div>
        <CaseItem caseid={ this.props.caseId } caseitem={ this.state.caseitem } />


      </div>
    )
  }
})

export default CasePage
