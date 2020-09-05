import React from 'react';
class Greeting extends React.Component {
    render() {
      const hh = this.props.location.state.test;
  
      alert(hh);
  
      return (
        <React.Fragment>
          <h1>Greeting page</h1>
          <p>
           helloooo
          </p>
        </React.Fragment>
      );
    }
  }
  export default Greeting;