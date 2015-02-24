import React from 'react';

import * as actions from '../actions'

export const FilterListItem = React.createClass({

  handleChange(event){
    let filter = this.props.actortype
    if (event.target.checked) {
      actions.applyFilter( filter )
    } else {
      actions.removeFilter( filter )
    }
  },

  render() {
    return (
      <input type="checkbox" onChange={this.handleChange}>{ this.props.actortype }</input>
    )
  },

});

export default FilterListItem