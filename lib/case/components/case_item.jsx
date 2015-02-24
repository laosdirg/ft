import React from 'react'

export const CaseItem = React.createClass({


  render() {
    return <div>id: { this.props.id }, titel: { this.props.titel } </div>
  }
})

export default CaseItem