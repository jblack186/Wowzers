import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Homepage from './Homepage';
import './NavBar.css'
import GoalPick from './GoalPick';
import DashBoard from './Dashboard';


function App() {
  return (
    <div className="App">
        <ul className="mobile-nav">
        <a href="#">Log In</a>
        <a href="#">Sign Up</a>
        <a href="#">Sign Out</a>
      </ul>

     <Route exact path='/home' render= {(props) => { return <Homepage  {...props}  />}} />
     <Route exact path='/goal-pick' render= {(props) => { return <GoalPick  {...props}  />}} />
     <Route exact path='/dashboard' render= {(props) => { return <DashBoard  {...props}  />}} />

    </div>
  );
}

export default App;
