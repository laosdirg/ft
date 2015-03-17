import React from 'react';

import * as actions from '../actions'

import dispatcher from 'lib/shared/flux/dispatcher'
import { CaseTypeStore } from '../stores/casetype_store'

import Anchor from 'lib/shared/routing/components/anchor.jsx!'

export const FilterListItem = React.createClass({

  handleClick( event ) {
    let filter = this.props.casetype
    actions.applyFilter( filter )
    let casetypeid = dispatcher.get(CaseTypeStore).getFor( filter )
    actions.loadCases( casetypeid )
  },

  render() {
    return <a href="#" onClick={ this.handleClick }>{ this.props.casetype }</a>
  },

});

export default FilterListItem
