import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Homepage from './Homepage';
import './NavBar.css'


function App() {
  return (
    <div className="App">
        <ul className="mobile-nav">
        <a href="#">Log In</a>
        <a href="#">Sign Up</a>
        <a href="#">Sign Out</a>
      </ul>

     <Route exact path='/home' render= {(props) => { return <Homepage  {...props}  />}} />

    </div>
  );
}

export default App;
