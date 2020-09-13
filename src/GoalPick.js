import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Cookie from './img/almond-cookies.jpg';
import Flour from './img/flourincup.jpg';
import Placeholder from './img/pick-placeholer.jpg';
import LowSugar from './img/lowsugar.jpg';
import LowSodium from './img/lowsodium.jpg';
import NavBar from './NavBar';
import './GoalPick.css';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';



const GoalPick = e => {
  const [pickGoal, setPickGoal] = useState('');


console.log(pickGoal)
  const setChoiceCarb = e => {
    e.preventDefault();
    
    setPickGoal('flour');
    localStorage.setItem('pick', 'low-carb')
  }

  const setChoiceSodium = e => {
    e.preventDefault();
    
    setPickGoal('sodium');
    localStorage.setItem('pick', 'balanced')

  }

  const setChoiceFat = e => {
    e.preventDefault();
    
    setPickGoal('fat');
    localStorage.setItem('pick', 'low-fat')

  }

  const setChoiceSugar = e => {
    e.preventDefault();
    
    setPickGoal('sugar');
    localStorage.setItem('pick', 'high-protein')

  }

  const checkButton = e => {
    if (pickGoal === '') {
      alert('must pick one')
    }
  }

  
  return (
    <div className='pick-container'>
      <NavBar />
      <div className='choices-pic-text'>
        <div className='goal-image-container'>
          <img className={pickGoal === '' ? 'choice-img' : 'choice-img-hide'} src={pickGoal !== '' ? {pickGoal} : Placeholder} 
          alt='choice' />
          <img className={pickGoal === 'flour' ? 'choice-img' : 'choice-img-hide'} src={Flour} />
          <img className={pickGoal === 'sodium' ? 'choice-img' : 'choice-img-hide'} src={LowSodium} />
          <img className={pickGoal === 'fat' ? 'choice-img' : 'choice-img-hide'} src={Cookie} />
          <img className={pickGoal === 'sugar' ? 'choice-img' : 'choice-img-hide'} src={LowSugar} />
          </div>
          <div className='choices-text'>
            <h3>WHAT DO YOU LOOK FOR IN RECIPES?</h3>
            <Link  to='./dashboard'>
              <button onClick='checkButton' className={pickGoal === '' ? 'see-thru' : 'choices-button'}>Next</button> 
            </Link>
          </div>
      </div>
      <div className='choices'>
        <ul className='choice-boxes'>
          <div onClick={setChoiceCarb}  className='choice-box' >
            <FontAwesomeIcon icon={faCheckCircle} style={pickGoal === 'flour' ? {color:'green', fontSize: '40px', paddingBottom: '15px'} : {color:'white', fontSize: '40px', paddingBottom: '15px'}  }/>
            <li style={pickGoal === 'flour' ? {color:'green'} : {color:'white'}}>Low Carb</li>
          </div>
          <div onClick={setChoiceSodium}  className='choice-box'>
            <FontAwesomeIcon icon={faCheckCircle} style={pickGoal === 'sodium' ? {color:'green', fontSize: '40px', paddingBottom: '15px'} : {color:'white', fontSize: '40px', paddingBottom: '15px'}  }/>
            <li style={pickGoal === 'sodium' ? {color:'green'} : {color:'white'}}>Balanced</li>
          </div>
          <div  onClick={setChoiceFat} className='choice-box'>
            <FontAwesomeIcon icon={faCheckCircle} style={pickGoal === 'fat' ? {color:'green', fontSize: '40px', paddingBottom: '15px'} : {color:'white', fontSize: '40px', paddingBottom: '15px'}  }/>
          <li style={pickGoal === 'fat' ? {color:'green'} : {color:'white'}}>Low Fat</li>
          </div>
          <div  onClick={setChoiceSugar} className='choice-box'>
            <FontAwesomeIcon icon={faCheckCircle} style={pickGoal === 'sugar' ? {color:'green', fontSize: '40px', paddingBottom: '15px'} : {color:'white', fontSize: '40px', paddingBottom: '15px'}  }/>
          <li style={pickGoal === 'sugar' ? {color:'green'} : {color:'white'}}>High Protein</li>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default GoalPick; 

