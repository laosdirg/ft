import React from 'react'

//------------------------------------------------------------------------------

export default React.createClass({

  handleClick( event ) {
    event.preventDefault()
  },

  render() {
    return (
      <a href={this.props.href} onClick={this.handleClick.bind(this)}>
        { this.props.children }
      </a>
    )
  },

}