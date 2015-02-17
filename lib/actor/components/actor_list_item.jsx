import React from 'react/addons'

import Anchor from 'lib/routing/components/anchor.jsx!'

//------------------------------------------------------------------------------

export const ActorListItem = React.createClass({

  mixins: [ React.addons.PureRenderMixin ],

  render() {
    return (
      <div>
        <p><Anchor href={"#actors/" + this.props.id }>{ this.props.navn }</Anchor> ({ this.props.typeid })</p>
      </div>
    )
  },

})

export default ActorListItem
