import React from 'react'

import CaseList from './case_item_list.jsx!'
import FilterList from './filter_list.jsx!'
import App from 'lib/shared/common/components/app.jsx!'

import { CasesStore } from '../stores/cases_store'

import { Mixin as FluxMixin } from 'laosdirg-flux/integrations/react'

//------------------------------------------------------------------------------

export const CasesPage = React.createClass({

mixins: [ FluxMixin, React.addons.PureRenderMixin ],

statics: {
  stores: [ CasesStore ]
},

getStateFromStores() {
  return { cases: this.getStore(CasesStore).getAll() }
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
