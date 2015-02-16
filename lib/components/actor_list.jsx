import React from 'react';

//------------------------------------------------------------------------------

export default class ActorList extends React.Component {

  render() {
    return (
      <ol>
        {this.props.actors.map( actor => {
          return <li>{actor.navn}</li>;
        })}
      </ol>
    );
  }

}
