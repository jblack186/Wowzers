import React, {useState, useEffect} from 'react';
import NavBar from './NavBar';
import './Homepage.css';
import Salt from './vid/salt-mae.mp4';


const Homepage = e => {
  var x = window.matchMedia("(max-width: 1000px)")
 // Call listener function at run time

  function close() {
    if (x.matches) {
    document.querySelector('.mobile-nav').style.width = '0px';
    document.querySelector('.mobile-nav').style.marginLeft = '0px';
    document.querySelector('.fa-bars').style.display = 'flex';
    document.querySelector('.close-icon').style.display = 'none';
    document.querySelector('.banner').style.filter = 'blur(0px)';
    }
  
  }


  return (
    <div>
      <NavBar />
      <div onClick={close} class="banner">
  
        <video autoPlay loop muted 
        style={{
                          position: "absolute",
                          width: "100%",
                          left: "50%",
                          top: "50%",
                          height: "100%",
                          objectFit: "cover",
                          transform: "translate(-50%, -50%)",
                          zIndex: "-1",
        }}>
          <source src={Salt} type="video/mp4" />
        </video>
        <div class="content">
          <h1>Wowzers</h1>
          <p>Knowing what's right for your health can be a challenge. Let us lend a helping hand.</p>
          <div class="hero-buttons">
            <button class="button-one">Health Goals</button>
            <button class="button-two">Taste Preferences</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage;