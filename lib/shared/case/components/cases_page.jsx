import React from 'react'

import StoreMixin from 'lib/vendor/flux/store_mixin'

import CaseList from './case_item_list.jsx!'
import FilterList from './filter_list.jsx!'
import App from 'lib/shared/core/components/app.jsx!'

import dispatcher from 'lib/shared/flux/dispatcher'
import { CasesStore } from '../stores/cases_store'

export const CasesPage = React.createClass({

mixins: [ React.addons.PureRenderMixin, StoreMixin ],

statics: {
  stores: [ CasesStore ]
},

getStateFromStores() {
  return { cases: dispatcher.get(CasesStore).getAll() }
},

render() {
  if (!this.state.cases) return <p>Loading</p>
  return (
    <div>
      <FilterList />
      <CaseList cases={ this.state.cases } />
    </div>
  )
}
})

export default CasesPage
