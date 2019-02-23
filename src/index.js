import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import Happy from './components/Happy';
import Sleepy from './components/Sleepy';
import Guilty from './components/Guilty';

// your code goes here
class Home extends Component{
  render(){
    return(
      <Router>
   <div>
     <ul>
       <li>
         <Link to="/">Home</Link>
       </li>
       <li>
         <Link to="/Happy">Happy</Link>
       </li>
        <li>
         <Link to="/Sleepy">Sleepy</Link>
       </li>
       <li>
         <Link to="/Guilty">Guilty</Link>
       </li>
     </ul>
     <hr/>

     <Route exact path="/" />
     <Route path="/happy" component={Happy} />
     <Route path="/sleepy" component={Sleepy} />
     <Route path="/guilty" component={Guilty} />
   </div>
 </Router>
)
  }
}

ReactDOM.render( <Home />, document.getElementById('root') );

// In index.js, implement a navigation menu (styling is optional for this). Your navigation menu should have four links:
//
// Home ( blank page with only the navigation menu )
// Happy
// Sleepy
// Guilty
