import React from 'react'
import { Context, renderToDOM } from '../lib/ft'

import { navigate } from '../lib/shared/routing/actions'

// for dev tool support
window.React = React

// instantiate flux data layer (rehydrating from server-sent state)
const context = new Context( )

// dispatch navigation action in case no state was sent from server
navigate( context.dispatcher, history.location )

// wait for dom before mounting
window.addEventListener( 'DOMContentLoaded', event => {
  // render state to ui (and bind store listeners)
  let container = document.getElementById( 'application' )

  renderToDOM( context, container )
})

/*
// instantiate flux data layer (rehydrating from server-sent state)
flux = new Flux( CONFIG.DEHYDRATED_STATE )

// dispatch navigation action in case no state was sent from server
flux.execute( navigate, history.location )

// render state to ui (and bind store listeners)
window.addEventListener( 'DOMContentLoaded', _ => {
  let container = document.getElementById( CONFIG.MOUNT_NODE )

  renderToDOM( flux, container )
})

*/
