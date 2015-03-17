import { Context, renderToString } from './ft'
import { navigate } from './shared/routing/actions'

//------------------------------------------------------------------------------

export function serve( req, res ) {
  const context = new Context()
  navigate( context.dispatcher, req.url ).then(() => {
    //const renderedMarkup = renderToString( context )
    //const state = context.serialize()
    const renderedMarkup = ''
    const state = {}

    res.render( 'index.jade', { renderedMarkup, state, title: 'FT' })
  })
}
