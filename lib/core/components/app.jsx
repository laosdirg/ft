import React from 'react'

import Anchor from 'lib/routing/components/anchor.jsx!'
import SearchContainer from 'lib/search/components/search_container.jsx!'

//------------------------------------------------------------------------------

export const FTApp = React.createClass({

  render() {
    return (
      <div className="FTApp">
        <nav className="App-nav">
          <h1><Anchor href="/">FT</Anchor></h1>
          <Anchor href="/actors">Aktører</Anchor>
          <Anchor href="/cases">Sager</Anchor>
          <Anchor href="/derp">Blindgyde</Anchor>
          <SearchContainer />
        </nav>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  },

})

export default FTApp
