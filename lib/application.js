import React from 'react'
import Actor from './components/actor.jsx!'

export function renderToDOM( container ){
  let element = React.createElement( Actor )

  React.render( element, container )
}
