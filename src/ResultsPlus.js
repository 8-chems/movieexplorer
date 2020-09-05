import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DetailedResult from './components/DetailedResult';
import { Redirect } from 'react-router';


class ResultsPlus extends React.Component {
/*
  constructor(props){
    super(props);
    
  }
  */
   render(props) {


    if(this.props.location.state=== undefined){
      alert('You should fill your query form before getting any results');
      return <Redirect to="/" />;
       }else {

  return (
    <div className="App">
    <Navbar name="Movie Explorer Application" /> 
    <DetailedResult his={this.props.history} y={this.props.location.state.year} t={this.props.location.state.movieName} />
    <Footer />
    </div>
  );
}
}
}

export default ResultsPlus;
