import React from 'react'

import { navigate } from '../actions'

import { Mixin as FluxMixin } from 'laosdirg-flux/integrations/react'

export default React.createClass({

  mixins: [ FluxMixin ],

  statics: {
    stores: [],
  },

  getStateFromStores(){
    return {
      url: this.props.href
    }
  },

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
