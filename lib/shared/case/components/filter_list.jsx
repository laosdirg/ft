import React from 'react';

import { CaseTypeStore } from '../stores/casetype_store'

import FilterListItem from './filter_list_item.jsx!'

import {FluxMixin} from 'lib/vendor/flux/mixin'

//------------------------------------------------------------------------------

export const FilterList = React.createClass({

  mixins: [ React.addons.PureRenderMixin, FluxMixin ],

  statics: {
    stores: [ CaseTypeStore ]
  },

  getStateFromStores() {
    return {
      casetypes: this.getStore(CaseTypeStore).getAll()
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
