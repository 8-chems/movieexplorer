import React from 'react';
import './App.css';
//import Greeting from './Greeting.js';
//import Home from './Home.js';
import Results from './Results.js';
import ResultsPlus from './ResultsPlus.js';
import QueryPage from './QueryPage.js';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
   

<Router>   
{/* <Route path="/home/" render={(props) => <Home/>} /> */}
{/* <Route path="/greeting/" render={(props) => <Greeting text="Hello, " {...props} />} /> */}

<Route path="/" exact render={(props) => <QueryPage/>} />
<Route path="/results/" render={(props) => <Results {...props} />} />
<Route path="/detailedresults/" render={(props) => <ResultsPlus {...props} />} />

</Router>

);
}

export default App;
