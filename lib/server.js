import { Context, renderToString } from './ft'
import { navigate } from './vendor/routing/actions'

//------------------------------------------------------------------------------

export function serve( req, res ) {
  const context = new Context()
  context.action( navigate, req.url ).then(() => {
    const renderedMarkup = renderToString( context )
    const state = context.serialize()

    res.render( 'index.jade', { renderedMarkup, state, title: 'FT' })
  })
}
