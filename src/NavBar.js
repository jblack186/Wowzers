import React, {useState, useEffect} from 'react';
import './NavBar.css';
import Logo from './img/wowzers-logo.png'

const NavBar = e => {

  function openSlideMenu() {
    document.querySelector('.mobile-nav').style.width = '250px';
    document.querySelector('.mobile-nav').style.marginLeft = '250px';
  }

  function closeSlideMenu() {
    document.querySelector('.mobile-nav').style.width = '0px';
    document.querySelector('.mobile-nav').style.marginLeft = '0px';
  }

  return (
    <div>
      <nav>
        <div className="nav-one">
          <img src={Logo} alt="wowzers-logo" />
          <ul className="desktop-nav-one">
            <li>What We Do</li>
            <li>Our Solutions</li>
          </ul>f
        </div>
        <div className="nav-two">
          <ul className="desktop-nav-two">
            <li>Log In</li>
            <li>Sign Up</li>
          </ul>
          
          <a href="#" onClick={openSlideMenu}><i className="fa fa-bars" aria-hidden="true"></i></a>
          <button>Get Health Quote</button>
        </div>
      </nav>
      <ul className="mobile-nav">
        <a href="#" onClick={closeSlideMenu}>
          <i className="far fa-window-close"></i></a>
        <a href="#">Log In</a>
        <a href="#">Sign Up</a>
        <a href="#">Sign Out</a>
      </ul>

    </div>
  )
}

export default NavBar;