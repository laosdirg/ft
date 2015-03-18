import React from 'react'

import { Flux } from 'laosdirg-flux'
import { Component as FluxComponent } from 'laosdirg-flux/integrations/react'

import { navigate } from 'laosdirg-flux-router/actions'




let MultiTestElement = React.createClass({
  render(){
    return <div>lol</div>
  }
})


class MultiTestFlux extends Flux(){

}




ReactIntegration.renderToDOM( MultiTestElement, MultiTestFlux )
