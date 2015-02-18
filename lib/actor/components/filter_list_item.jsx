import React from 'react';

import * as actorActions from '../actions'

export const FilterListItem = React.createClass({

  handleChange(event){
    let value = this.props.actortype 

    actorActions.applyFilter( value )
  },

  render() {
    return (
      <input type="checkbox" onChange={this.handleChange}>{ this.props.actortype }</input>
    )
  },

});

export default FilterListItem