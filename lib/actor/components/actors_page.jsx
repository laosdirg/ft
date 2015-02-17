import React from 'react/addons'

import App from 'lib/core/components/app.jsx!'

import ActorList from './actor_list.jsx!'
import FilterList from './filter_list.jsx!'

import testdata from 'testdata'

//------------------------------------------------------------------------------

export const ActorsPage = React.createClass({

  mixins: [ React.addons.PureRenderMixin ],

  render() {
    return (
      <App>
        <div>
          <FilterList />
        </div>
        <div>
          <h2>Aktører</h2>
          <div className="Filters">

          </div>
          <ActorList actors={testdata.value} />
        </div>
      </App>
    );
  },

})

export default ActorsPage
