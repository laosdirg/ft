import { CONTEXT_TYPES } from './constants'

import React from 'react'

//------------------------------------------------------------------------------

export class Component extends React.Component {

  getChildContext() {
    return {flux: this.props.flux}
  }

  render() {
    let { ReactClass, flux, ...other } = this.props

    return React.createElement( ReactClass, other )
  }

}

Component.childContextTypes = CONTEXT_TYPES
