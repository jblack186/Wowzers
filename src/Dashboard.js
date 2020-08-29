import React, {useState, useEffect} from 'react';
import {InputGroup, FormControl, Button} from 'react-bootstrap';
import NavBar from './NavBar';
import './Dashboard.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Dinner from './img/dashboard1.jpg';
import food from './Foods';

const DashBoard = e => {
  const [recommendations, setRecommendations] = useState([]);

useEffect(() => {
  async function sendApiRequest() {
    let pick = localStorage.getItem('pick');
    let APP_ID = "87fed42d";
    let API_KEY = "68321153310172e99b2609b96cd9e726";	
    let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=pasta&diet=${pick}`);
    console.log(response)
    let data = await response.json()
    setRecommendations(data.hits);
    

    console.log(pick)
    
    
  }
  // sendApiRequest();

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
      <div className='rec-container'>
        {food.map(item => {
          return <div> 
                    <img src={item.image} />
                  </div>
        })}
      </div>
    </div>
  )
}

export default DashBoard;