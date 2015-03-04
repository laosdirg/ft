import React from 'react'

import StoreMixin from 'lib/flux/store_mixin'

import CaseList from './case_item_list.jsx!'
import FilterList from './filter_list.jsx!'
import App from 'lib/core/components/app.jsx!'

import casesStore from '../stores/cases_store'

export const CasesPage = React.createClass({

mixins: [ React.addons.PureRenderMixin, StoreMixin ],

statics: {
  stores: [ casesStore ]
},

getStateFromStores() {
  return {
    cases: casesStore.getAll()
  }
},

render() {
  if (!this.state.cases) return <p>Loading</p>
  return (
    <App>
      <FilterList />
      <CaseList cases={ this.state.cases } />
    </App>
  )
}
})

export default CasesPage