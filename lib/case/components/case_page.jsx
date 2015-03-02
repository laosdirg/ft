import React from 'react'

import storeMixin from 'lib/flux/store_mixin'

import casesStore from '../stores/cases_store'

import CaseItem from './case_item.jsx!'

export const CasePage = React.createClass({

  mixins: [ storeMixin ],

  statics: {
    stores: [ casesStore ]
  },

  getStateFromStores() {
    return { caseitem: casesStore.getItem( this.props.caseId ) }
  },

  render() {
    return (
      <CaseItem caseid={ this.props.caseId } caseitem={ this.state.caseitem } />
    )
  }
})

export default CasePage