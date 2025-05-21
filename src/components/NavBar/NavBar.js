import React from 'react'
import './NavBar.css'
import logo from'../../img/logo.png'
import menu from '../../img/menu.png'
import { Link } from 'react-scroll'
import {isMobile} from 'react-device-detect'
import { useState, useEffect } from "react";


function NavBar() {
  var opened = false;

 
  // useEffect(() => {
  //   if(window.innerWidth<=768){
  //   const element = document.querySelector('.navbar');
  //   element.style.maxWidth = window.innerWidth + 'px';
  //   console.log("width detected"+window.innerWidth + 'px');
  // }
  
  // }, []);
  
  if(window.innerWidth<=768){
    console.log("Mobile dev");
  }
  
  const drawerHandle=()=>{
    
    if(window.innerWidth<=768){
        var m =document.getElementById("desktopMenu");
        if(opened){
            
            m.style.right="-50rem";
            m.style.display="none";
            m.style.animation="fadeOut"
            m.style.animationDuration="0.5s"
           opened=false;
        }else{
      
           m.style.right="0px";
            m.style.display="flex"
            m.style.flexDirection="column"
             m.style.alignItems="center"
           m.style.animation="fadeIn"
            m.style.animationDuration="0.5s"
          opened=true;
        }
    }else{
      console.log("not a moible")
    }

  }

  const closeNavbar=()=>{
    if(opened && window.innerWidth<=768){
       var m =document.getElementById("desktopMenu");
          m.style.right="-50rem";
          m.style.display="none"
    }
   
  }
  return (
    <nav className='navbar'>
        <img src={logo} alt='logo' className='navBarLogo'/>
        <div className='desktopMenu' id='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem' onClick={closeNavbar}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem' onClick={closeNavbar}>Skills</Link> 
            <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem' onClick={closeNavbar}>Projects</Link>      
            {/* <Link activeClass='active' to='services' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem' onClick={closeNavbar}>Services</Link>       */}
            <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem' onClick={closeNavbar}>About me</Link>
        </div>
        <button className='desktopMenuBtn' onClick={()=>{document.getElementById("contact").scrollIntoView({behavior:'smooth'});}}>
            Contact
        </button>
        {/* <button className='menu' onClick={()=>{document.getElementById("contact").scrollIntoView({behavior:'smooth'});}}>More
        </button> */}
        <img src={menu} alt='logo' className='menu' onClick={drawerHandle}/>

    </nav>
  )
}


export default NavBar