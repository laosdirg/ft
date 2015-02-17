import React from 'react/addons'

import App from 'lib/core/components/app.jsx!'

//------------------------------------------------------------------------------

export const ActorPage = React.createClass({

  mixins: [ React.addons.PureRenderMixin ],

  render() {
    return (
      <App>
        <h2>Aktør: hej</h2>
      </App>
    );
  },

})

export default ActorPage
