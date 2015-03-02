import React from 'react'

import CaseItem from './case_item.jsx!'

export const CaseList = React.createClass({

  render() {
    return (
      <ol>
        {this.props.cases.map( (caseitem, caseid) => {
          return <li key={ caseid }><CaseItem caseid={ caseid } caseitem={ caseitem } /></li>
        })}
      </ol>
    )
  }
})

export default CaseList