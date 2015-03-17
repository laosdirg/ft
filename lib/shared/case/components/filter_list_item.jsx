import React from 'react';

import * as actions from '../actions'

import { CaseTypeStore } from '../stores/casetype_store'

import Anchor from 'lib/vendor/routing/components/anchor.jsx!'

import {FluxMixin} from 'lib/vendor/flux/mixin'

export const FilterListItem = React.createClass({

  handleClick( event ) {
    let filter = this.props.casetype
    actions.applyFilter( filter )
    let casetypeid = this.getStore(CaseTypeStore).getFor( filter )
    actions.loadCases( casetypeid )
  },

  render() {
    return <a href="#" onClick={ this.handleClick }>{ this.props.casetype }</a>
  },

});

export default FilterListItem
