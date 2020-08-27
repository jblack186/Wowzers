import React, {useState, useEffect} from 'react';
import './NavBar.css';
import Logo from './img/wowzers-logo.png'
import { faBars, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';



function closeSlideMenu() {
  document.querySelector('.mobile-nav').style.width = '0px';
  document.querySelector('.mobile-nav').style.marginLeft = '0px';
  document.querySelector('.fa-bars').style.display = 'flex';
  document.querySelector('.close-icon').style.display = 'none';
  document.querySelector('.banner').style.filter = 'blur(0px)';


}


function openSlideMenu() {
  document.querySelector('.mobile-nav').style.width = '250px';
  document.querySelector('.mobile-nav').style.marginLeft = '5px';
  document.querySelector('.mobile-nav').style.marginLeft = '0px';
  document.querySelector('.close-icon').style.display = 'flex';
  document.querySelector('.fa-bars').style.display = 'none';
  document.querySelector('.banner').style.filter = 'blur(5px)';



}



const NavBar = e => {


  return (
    <div>
      <nav>
        <div className="nav-one">
          <img src={Logo} alt="wowzers-logo" />
          <ul className="desktop-nav-one">
            <li>What We Do</li>
            <li>Our Solutions</li>
          </ul>
        </div>
        <div className="nav-two">
          <ul className="desktop-nav-two">
            <li>Log In</li>
            <li>Sign Up</li>
          </ul>
          
          <a href="#" onClick={openSlideMenu}>
            <FontAwesomeIcon className="fa fa-bars" icon={faBars} style={{color: 'black', fontSize: '20px'}}/>
          </a>
          <a href="#" onClick={closeSlideMenu}>
          <FontAwesomeIcon className='close-icon' icon={faWindowClose} style={{color: 'black', fontSize: '20px', }}/>
        </a>

          <button>Get Health Quote</button>
        </div>
      </nav>

    </div>
  )
}

export default NavBar;