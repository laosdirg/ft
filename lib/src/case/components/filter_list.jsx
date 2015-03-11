import React from 'react';

import StoreMixin from 'lib/src/flux/store_mixin'

import dispatcher from 'lib/src/core/dispatcher'
import { CaseTypeStore } from '../stores/casetype_store'

import FilterListItem from './filter_list_item.jsx!'


//------------------------------------------------------------------------------

export const FilterList = React.createClass({

  mixins: [ React.addons.PureRenderMixin, StoreMixin ],

  statics: {
    stores: [ CaseTypeStore ]
  },

  getStateFromStores() {
    return {
      casetypes: dispatcher.get(CaseTypeStore).getAll()
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
