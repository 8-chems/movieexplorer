import React from 'react';
//import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import SearchDiv from './components/SearchDiv';
import Footer from './components/Footer';
//import { BrowserRouter as Router } from 'react-router-dom'

class QueryPage extends React.Component {
/*
constructor(props){
  super(props);
}
*/

render() {
  return (
    <div className="App">
    <Navbar name="Movie Explorer Application" /> 
    <SearchDiv />
    <Footer />
    </div>
  );
}
}

export default QueryPage;
