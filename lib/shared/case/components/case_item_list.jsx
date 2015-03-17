import React from 'react'

import CaseItem from './case_item.jsx!'

export const CaseList = React.createClass({

  render() {
    return (
      <div>
        <ol>
          {this.props.cases.map( (caseitem, caseid) => {
            return (
              <li key={ caseid }>
                <CaseItem caseid={ caseid } caseitem={ caseitem } />
              </li>
            )
          })}
        </ol>
      </div>
    )
  }
})

export default CaseList