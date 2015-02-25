import React from 'react';

import StoreMixin from 'lib/flux/store_mixin'

import caseTypeStore from '../stores/casetype_store'

import FilterListItem from './filter_list_item.jsx!'


//------------------------------------------------------------------------------

export const FilterList = React.createClass({

  mixins: [ React.addons.PureRenderMixin, StoreMixin ],

  statics: {
    stores: [ caseTypeStore ]
  },

  getStateFromStores() {
    return {
      casetypes: caseTypeStore.getAll()
    }
  },

  render() {
    console.log(this.state.casetypes)
    return (
      <div>
        <ul>
          {this.state.casetypes.map( (caseid, i) => 
            { return <li key={ i }> <FilterListItem caseid={ caseid } casetype={ i }/> </li> }
          )}
        </ul>
      </div>
    );
  }
});

export default FilterList
