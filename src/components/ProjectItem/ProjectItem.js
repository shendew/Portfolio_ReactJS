import React from 'react'
import './ProjectItem.css'
import nisada_logo from '../../img/nisadas_logo.png'
import { Link } from 'react-scroll'


function ProjectItem({pName,pImg,pDesc,pLive,pSource}) {
  return (
    <div className='itemContainer'>
      <img src={pImg} alt='logo' className='projectLogo'/>
      <span>{pName}</span>
      <div className='buttonLay'>
      <Link><button className='sourceBtn' onClick={(e) => {e.preventDefault(); window.open({pSource},'_blank','noopener,noreferrer');}}>Source Code</button></Link>
      <Link><button className='demoBtn'  onClick={(e) => {e.preventDefault(); window.open({pLive},'_blank','noopener,noreferrer');}}>Live Demo</button></Link>
      </div>
    </div>
  )
}

export default ProjectItem