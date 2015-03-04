import React from 'react'

import CaseItem from './case_item.jsx!'

export const CaseList = React.createClass({

  render() {
    return (
      <div>
        <ol>
          {this.props.cases.map( (caselistitem, caseid) => {
            return (
              <li key={ caseid }>
                <CaseItem caseid={ caseid } caselistitem={ caselistitem } />
              </li>
            )
          })}
        </ol>
      </div>
    )
  }
})

export default CaseList