import React, {useState, useEffect} from 'react';
import {InputGroup, FormControl, Button} from 'react-bootstrap';
import NavBar from './NavBar';
import './Dashboard.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Dinner from './img/dashboard1.jpg';
import food from './Foods';
import {NavLink} from 'react-router-dom';
import { Router } from 'react-router';
import { dom } from '@fortawesome/fontawesome-svg-core';

const DashBoard = e => {
  const [recommendations, setRecommendations] = useState([]);

useEffect(() => {
  async function sendApiRequest() {
    let pick = localStorage.getItem('pick');
    let APP_ID = "87fed42d";
    let API_KEY = "68321153310172e99b2609b96cd9e726";	
    let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=food&diet=${pick}`);
    console.log(response)
    let data = await response.json()
    setRecommendations(data.hits);
    

    console.log(data.hits)
    
    
  }
  sendApiRequest();

}, [])

console.log(recommendations)
console.log('food',food)
  return (

    <div className='dashboard-container'>
      <NavBar />
      <div className='search-pic'>
        <div className='input-button'>
          <input placeholder='Search' className='search-bar' />
          <button className='search-button'>{<FontAwesomeIcon icon={faSearch}/> }</button>
        </div>
      <img className='dinner-pic' src={Dinner} alt='dashboard' />
      </div>
      <div className='item-container'>
        {recommendations.map(item => {
          return     <div className='item'>
                      <img src={item.recipe.image} />
                      <div className='label-ing-button'>
                        <div className='labels'>
                          <p className='item-label'>{item.recipe.label}</p>
                          <p>{item.recipe.dietLabels}</p>
                        </div>
                        <div className='ingredient-container'>
                          <p className='ingredients'><p style={{fontWeight: 'bold'}}><p className='need'>What you     will need:</p></p> {item.recipe.ingredientLines[0].length < 70 ? item.recipe.ingredientLines[0] : null }</p>
                          {console.log(item.recipe.ingredientLines[1].length)}
                          {item.recipe.ingredientLines[1].length < 70 ? <p className='ingredients'>{item.recipe.ingredientLines[1]}</p> : null}
                          {item.recipe.ingredientLines[2].length < 70 ? <p className='ingredients'>{item.recipe.ingredientLines[2]}</p> : null}
                          <p className='ingredients'>and more...</p>
                        </div>
                        <a href={item.recipe.url}><button className='recipe-button'>Get Recipe here</button> </a>
                      </div>
                    </div>
                  
        })}
      </div>
    </div>
  )
}

export default DashBoard;