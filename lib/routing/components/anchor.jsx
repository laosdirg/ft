import React from 'react'
import crossroads from 'crossroads'

export default React.createClass({

  handleClick( event ) {
    let support = window.history && history.pushState
    if (!support) {
      throw new Error("History API not supported - fix your browser")
    }

    let { href, onClick } = this.props
    if ( onClick ) {
      onClick( event )
    }

    event.preventDefault()
    history.pushState( null, null, href );
    crossroads.parse( href )
  },

  render() {
    var { onClick, ...other } = this.props
    return <a {...other } onClick={this.handleClick}>{this.props.children}</a>
  },

})
