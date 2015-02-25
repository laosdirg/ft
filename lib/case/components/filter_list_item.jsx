import React from 'react';

import * as actions from '../actions'

import Anchor from 'lib/routing/components/anchor.jsx!'

export const FilterListItem = React.createClass({

  handleClick( event ) {
    let filter = this.props.casetype.type
    actions.applyFilter( filter )
  },

  render() {
    return <Anchor href={ "/cases/" + this.props.casetype.id } onClick={ this.handleClick }>{ this.props.casetype.type }</Anchor>
  },

});

export default FilterListItem