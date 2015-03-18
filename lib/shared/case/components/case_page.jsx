import React from 'react'

import { CasesStore } from '../stores/cases_store'

import App from 'lib/shared/common/components/app.jsx!'
import CaseItem from './case_item.jsx!'

import { Mixin as FluxMixin } from 'laosdirg-flux/integrations/react'

export const CasePage = React.createClass({

  mixins: [ FluxMixin ],

  statics: {
    stores: [ CasesStore ]
  },

  getStateFromStores() {
    return { caseitem: this.getStore(CasesStore).getItem( this.props.caseId ) }
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
