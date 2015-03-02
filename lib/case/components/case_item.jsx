import React from 'react'

import Anchor from 'lib/routing/components/anchor.jsx!'

export const CaseItem = React.createClass({

  render() {
    return (
      <div>
        <span className="Label">id</span>
          <Anchor href={ "/case/" + this.props.caseid }>{ this.props.caseid }</Anchor>
        <span className="Label">titel</span>
          { this.props.caseitem.titelkort }
      </div>
    )
  }
})

export default CaseItem