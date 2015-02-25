import React from 'react'

import CaseItem from './case_item.jsx!'

export const CaseList = React.createClass({


  render() {
    return (<ol>
        {this.props.cases.map( (caseitem, i) => {
          return <li key={i}><CaseItem id={ caseitem.get('id') } titel={ caseitem.get('titel') } /></li>
        })}
      </ol>
    )
  }
})

export default CaseList