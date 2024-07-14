import React from 'react'
import './ProjectItem.css'
import nisada_logo from '../../img/nisadas_logo.png'
import { Link } from 'react-scroll'


function ProjectItem({pName,pImg,pDesc,pLive,pSource}) {
  
  return (
    <div className='itemContainer'>
      <img src={pImg} alt='logo' className='projectLogo'/>
      <span className='pTitle'>{pName}</span>
      <div className='buttonLay'>
      <button className='sourceBtn' onClick={(e) => {
        e.preventDefault(); window.open(pSource,'_blank');
        }}>Source Code</button>

      <button className='demoBtn'  onClick={(e) => {
        e.preventDefault(); window.open(pLive,'_blank','noopener,noreferrer');
        // alert(pLive); 
        }}>Live Demo</button>
      </div>
    </div>
  )
}

export default ProjectItem