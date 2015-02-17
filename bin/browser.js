import React from 'react'
window.React = React

import { renderToDOM } from 'lib/application'

let container = document.getElementById('application')
renderToDOM( container )
