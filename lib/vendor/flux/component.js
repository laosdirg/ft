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

Component.childContextTypes = {
  flux: React.PropTypes.shape({
    getStore: React.PropTypes.func,
  }),
}
