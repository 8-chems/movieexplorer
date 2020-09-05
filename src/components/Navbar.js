import React, {  } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Nav} from 'react-bootstrap';

class Navbar extends React.Component {
   
    constructor(props) {
      super(props);
      this.state= {
          appname:props.name
      }
    }

render(){
return (

<Nav className="navbar navbar-expand-lg navbar-light" style={{background:'#7952B3'}}>
  <a className="navbar-brand" href="#nothing">{this.state.appname}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#nothing">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#nothing">Genres</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#nothing" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Services
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#nothing">Action</a>
          <a className="dropdown-item" href="#nothing">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#nothing">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#nothing"  aria-disabled="false">About</a>
      </li>
    </ul>
    
  </div>
</Nav>
  
);


/*<Nav className="navbar navbar-light" style={{background:'#7952B3'}}> 
       <a href="http://www.google.com" className="navbar-brand">{this.state.appname}</a>
        
       <div className="" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Pricing</a>
      </li>
      </ul>
      </div>
        </Nav>*/
}
}
export default Navbar;