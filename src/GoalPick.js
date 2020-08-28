import React, {useState, useEffect} from 'react';
import Cookie from './img/almond-cookies.jpg';
import Flour from './img/flourincup.jpg';
import NavBar from './NavBar';
import './GoalPick.css';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';



const GoalPick = e => {
  const [pickGoal, setPickGoal] = useState('');


  useEffect(() => {

  }, [])

  const setChoice = e => {
    e.preventDefault();
    setPickGoal(e.target.value);
  }
  
  return (
    <div className='pick-container'>
      <NavBar />
      <div className='choices-pic-text'>
        <img className='choice-img' src={Flour} style={{width: '95%', margin: '0 auto', height: '65vh', objectFit: 'cover', objectPosition: 'center'}} alt='choice' />
        <div className='choices-text'>
          <h3>WHAT DO YOU LOOK FOR IN RECIPES?</h3>
        </div>
      </div>
      <div className='choices'>
        <ul className='choice-boxes'>
          <div className='choice-box'>
            <FontAwesomeIcon icon={faCheckCircle} style={{color: 'white', fontSize: '40px', paddingBottom: '15px'}}/>
            <li>Low Carb</li>
          </div>
          <div className='choice-box'>
            <FontAwesomeIcon icon={faCheckCircle} style={{color: 'white', fontSize: '40px', paddingBottom: '15px'}}/>
            <li>Low Sodium</li>
          </div>
          <div className='choice-box'>
            <FontAwesomeIcon icon={faCheckCircle} style={{color: 'white', fontSize: '40px', paddingBottom: '15px'}}/>
          <li>Low Fat</li>
          </div>
          <div className='choice-box'>
            <FontAwesomeIcon icon={faCheckCircle} style={{color: 'white', fontSize: '40px', paddingBottom: '15px'}}/>
          <li>Low Sugar</li>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default GoalPick; 

