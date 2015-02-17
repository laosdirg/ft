import React from 'react'

//------------------------------------------------------------------------------

export const FTApp = React.createClass({

  render() {
    return (
      <div className="FTApp">
        <nav>
          <a href="#actors">Aktører</a>
          <a href="#derp">Blindgyde</a>
        </nav>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  },

})

export default FTApp
