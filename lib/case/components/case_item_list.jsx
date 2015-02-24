import React from 'react'

import CaseItem from './case_item.jsx!'

export const CaseList = React.createClass({


  render() {
    return (<ol>
        {this.props.cases.map( (titel, i) => {
          return <li key={i}><CaseItem titel={ titel } /></li>
        })}
      </ol>
    )
  }
})

export default CaseList