import React from 'react';

import * as actorActions from '../actions'

export const FilterListItem = React.createClass({

  handleChange(event){
    let filter = this.props.actortype
    actorActions.applyFilter( filter )
  },

  render() {
    return (
      <input type="checkbox" onChange={this.handleChange}>{ this.props.actortype }</input>
    )
  },

});

export default FilterListItem