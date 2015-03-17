import React from 'react'

import Anchor from 'lib/shared/routing/components/anchor.jsx!'
import SearchContainer from 'lib/shared/search/components/search_container.jsx!'

import StoreMixin from 'lib/vendor/flux/store_mixin'
import { RouteStore } from 'lib/shared/routing/store'

import {ActorsPage} from 'lib/shared/actor/components/actors_page.jsx!'

import {FluxWrapperMixin, FluxMixin} from 'lib/vendor/flux/mixin'

//------------------------------------------------------------------------------

export const FTApp = React.createClass({

  mixins: [ FluxWrapperMixin, React.addons.PureRenderMixin ],

  statics: {
    stores: [ RouteStore ]
  },

  getStateFromStores() {
    return { route: 1 }
  },

  render() {
    let page = ''
    switch (true) {
      default:
        page = <ActorsPage />
        break
    }

    return (
      <div className="FTApp">
        <nav className="App-nav">
          <h1><Anchor href="/">FT</Anchor></h1>
          <Anchor href="/actors">Aktører</Anchor>
          <Anchor href="/cases">Sager</Anchor>
          <Anchor href="/derp">Blindgyde</Anchor>
          <SearchContainer />
        </nav>
        <main>
          {page}
        </main>
      </div>
    )
  },

})

export default FTApp
