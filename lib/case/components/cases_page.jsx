 import React from 'react'

 import StoreMixin from 'lib/flux/store_mixin'

 import CaseList from './case_item_list.jsx!'

 import casesStore from '../stores/cases_store'

 export const CasesPage = React.createClass({

  mixins: [ React.addons.PureRenderMixin, StoreMixin ],

  statics: {
    stores: [ casesStore ]
  },

  getStateFromStores() {
    return { cases: casesStore.getAll() }
  },

  render() {
    if (!this.state.cases) return <p>Loading</p>
    return <div><CaseList cases={ this.state.cases } /> </div>
  }
 })

 export default CasesPage