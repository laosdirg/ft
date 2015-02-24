import React from 'react/addons'

import Anchor from 'lib/routing/components/anchor.jsx!'

//------------------------------------------------------------------------------

export const ActorListItem = React.createClass({

  mixins: [ React.addons.PureRenderMixin ],

  render() {
    return (
      <div>
        <p><Anchor href={"/actors/" + this.props.actor.get('id') }>{ this.props.actor.get('navn') }</Anchor> ({ this.props.actor.get('type') })</p>
      </div>
    )
  },

})

export default ActorListItem
