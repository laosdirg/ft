import React from 'react'

import Anchor from 'lib/routing/components/anchor.jsx!'

//------------------------------------------------------------------------------

export const FTApp = React.createClass({

  render() {
    return (
      <div className="FTApp">
        <nav>
          <Anchor href="/">Rod</Anchor>
          <Anchor href="actors">Aktører</Anchor>
          <Anchor href="cases">Sager</Anchor>
          <Anchor href="derp">Blindgyde</Anchor>
        </nav>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  },

})

export default FTApp
