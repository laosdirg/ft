import React from 'react'
import crossroads from 'crossroads'

export default React.createClass({

  handleClick( event ) {
    let support = window.history && history.pushState
    if (support) {
      event.preventDefault()
      history.pushState(null, null, this.props.href);
      crossroads.parse( this.props.href )
    }
  },

  render() {
    return <a {...this.props } onClick={this.handleClick}>{this.props.children}</a>
  },

})
