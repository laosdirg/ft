 import React from 'react'

 import StoreMixin from 'lib/flux/store_mixin'

 import CaseList from './case_item_list.jsx!'

 import caseStore from '../stores/case_store'

 export const CasePage = React.createClass({

  mixins: [ React.addons.PureRenderMixin, StoreMixin ],

  statics: {
    stores: [ caseStore ]
  },

  getStateFromStores() {
    return { cases: caseStore.getAll() }
  },

  render() {
    return <div><CaseList cases={ this.state.cases } /> </div>
  }
 })

 export default CasePage