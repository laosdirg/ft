import React from 'react/addons'

import ActorList from './actor_list.jsx!'
import FilterList from './filter_list.jsx!'

//------------------------------------------------------------------------------

export default React.createClass({

  mixins: [ React.addons.PureRenderMixin ],

  render() {
    return (
      <div>
        <div>
          <FilterList />
        </div>
        <div>
          <h2>Aktører</h2>
          <div className="Filters">

          </div>
          <ActorList actors={this.props.actors} />
        </div>
      </div>
    );
  },

})
