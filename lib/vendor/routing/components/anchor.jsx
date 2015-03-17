import React from 'react'

import {navigate} from '../actions'

import {FluxMixin} from 'lib/vendor/flux/mixin'

export default React.createClass({

  mixins: [ FluxMixin ],

  handleClick( event ) {
    let { href, onClick } = this.props

    if ( onClick ) {
      onClick( event )
    }
    if (!event.defaultPrevented) {
      event.preventDefault()

      this.action(navigate, href)
    }
  },

  render() {
    var { onClick, ...other } = this.props
    return <a {...other } onClick={this.handleClick}>{this.props.children}</a>
  },

})
