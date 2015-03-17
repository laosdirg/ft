import React from 'react/addons'

//------------------------------------------------------------------------------

export const Typeahead = React.createClass({

  mixins: [ React.addons.PureRenderMixin ],

  render() {
    return (
      <input ref="query" type="text" onChange={this.props.onChange} value={this.props.value} />
    )
  },

})

export default Typeahead
