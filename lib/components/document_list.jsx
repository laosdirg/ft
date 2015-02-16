import React from 'react';

//------------------------------------------------------------------------------

export default class ActorPage extends React.Component {

  constructor(props) {
  }

  render() {

    return (
      <div>
        {this.props.documents.map( document => {
          return <p>{document.name}</p>
        })}
      </div>
    );
  }

}
