import React from 'react';

import StoreMixin from 'lib/flux/store_mixin'

import caseTypeStore from '../stores/case_type_store'

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
    return (
      <div>
        <ul>
          {this.state.casetypes.map( (caseid, casetype) => 
            { return <li key={ casetype }> <FilterListItem caseid={ caseid } casetype={ casetype }/> </li> }
          )}
        </ul>
      </div>
    );
  }
});

export default FilterList
