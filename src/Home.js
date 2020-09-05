import React from 'react';
import { Link } from "react-router-dom";

class Home extends React.Component {
    render() {
    
  
      return (
       //  <React.Fragment>
         
         <Link className="btn btn-primary" to={{pathname: "/greeting", state:{ test:"test" }}}> Register </Link>
        /* </React.Fragment> */
      );
    }
  }
  export default Home;