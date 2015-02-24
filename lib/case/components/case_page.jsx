 import React from 'react'

 import CaseList from './case_item_list.jsx!'

 import CaseStore from '../stores/case_store'

 export const CasePage = React.createClass({

  mixins: [ React.addons.PureRenderMixin ],

  statics: {
    stores: [ CaseStore ]
  },

  getStateFromStores() {
    return CaseStore.getAll()
  },

  render() {
    console.log(this.state)
    return <div><CaseList cases={ this.state } /> </div>
  }
 })

 export default CasePage