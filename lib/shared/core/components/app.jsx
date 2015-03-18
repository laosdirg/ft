import React from 'react'

import Anchor from 'lib/vendor/routing/components/anchor.jsx!'
import SearchContainer from 'lib/shared/search/components/search_container.jsx!'

import { RouteStore } from 'lib/vendor/routing/store'

import {ActorsPage} from 'lib/shared/actor/components/actors_page.jsx!'
import {CasesPage} from 'lib/shared/case/components/cases_page.jsx!'

import { Mixin as FluxMixin } from 'laosdirg-flux/integrations/react'

//------------------------------------------------------------------------------

export const FTApp = React.createClass({

  mixins: [ FluxMixin, React.addons.PureRenderMixin ],

  statics: {
    stores: [ RouteStore ],
  },

  getStateFromStores() {
    return {
      route: this.getStore(RouteStore).getRoute()
    }
  },

  render() {
    let child = ''
    switch (this.state.route.get('name')) {
      case '/actors':
        child = <ActorsPage />
        break
      case '/cases':
        child = <CasesPage />
        break
      default:
        child = 'not found!'
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
          {child}
        </main>
      </div>
    )
  },

})

export default FTApp
