import React from 'react';

import * as actions from '../actions'

import { CaseTypeStore } from '../stores/casetype_store'

import Anchor from 'laosdirg-flux-router/components/anchor.jsx!'

import { Mixin as FluxMixin } from 'laosdirg-flux/integrations/react'

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
