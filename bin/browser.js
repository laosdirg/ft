import { Context, renderToDOM } from '../lib/ft'

import { navigate } from 'lib/vendor/routing/actions'

// instantiate flux data layer (rehydrating from server-sent state)
const context = new Context( )

// dispatch navigation action in case no state was sent from server
context.action( navigate, window.location.pathname )

// wait for dom before mounting
window.addEventListener( 'DOMContentLoaded', event => {
  // render state to ui (and bind store listeners)
  let container = document.getElementById( 'application' )

  renderToDOM( context, container )
})
