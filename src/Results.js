import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import GlobalResults from './components/GlobalResults';
import Footer from './components/Footer';
import { Redirect } from 'react-router';

//import {useLocation} from 'react-router-dom';




class Results extends React.Component{
 /* constructor(props){
    super(props);
  /*  if(this.props.location.searchValue=== undefined){
      alert('You should fill your query form before getting any results');
      this.props.history.push('home');
      return;
      //return (<QueryPage />);
    }*/
  //}

  
  render(props){
    if(this.props.location.state=== undefined){
    alert('You should fill your query form before getting any results');
    return <Redirect to="/" />;
     }else {

    const vf = this.props.location.state.searchFactor;
    const vv = this.props.location.state.searchValue;
    const vy = this.props.location.state.year;
    const vt = this.props.location.state.videoType;

   // alert(vf+" "+vv+" "+vy+" "+vt);
   

  return (
   
    <div className="App">
    <Navbar name="Movie Explorer Application"  /> 
    
    <GlobalResults vf={vf} vv={vv} vy={vy} vt={vt} his={this.props.history} />
    <Footer />
    </div>
  
  );
}
}
}

export default Results;
