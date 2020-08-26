import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Homepage from './Homepage';

function App() {
  return (
    <div className="App">
     <Route exact path='/home' render= {(props) => { return <Homepage  {...props}  />}} />

    </div>
  );
}

export default App;
