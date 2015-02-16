import React from 'react';

//------------------------------------------------------------------------------

export default class Actor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
  }

  tick() {
    this.setState({count: this.state.count + 1});
  }

  render() {
    return (
      <div onClick={this.tick.bind(this)}>
        Clicks: {this.state.count}
      </div>
    );
  }

}
