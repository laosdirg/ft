import React from 'react'
import ActorsPage from './components/actors_page.jsx!'

import testdata from 'testdata'

export function renderToDOM( container ){
  let element = React.createElement( ActorsPage, { actors: testdata.value } )

  React.render( element, container )
}
