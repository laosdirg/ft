import React from 'react'
import { Flux } from 'laosdirg-flux'
import { navigate } from 'laosdirg-flux-router/actions'



let TestElement = React.createClass({
  render(){
    return <div>lol</div>
  }
})



window.addEventListener( 'DOMContentLoaded', event => {
  React.render( React.createElement( TestElement ), document.getElementById( 'application2' ) )
})
