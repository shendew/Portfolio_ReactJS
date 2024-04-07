import React from 'react'
import './ProjectItem.css'
import nisada_logo from '../../img/nisadas_logo.png'
import { Link } from 'react-scroll'


function ProjectItem({pName,pImg,pDesc,pLive,pSource}) {
  return (
    <div className='itemContainer'>
      <img src={nisada_logo} alt='logo' className='projectLogo'/>
      <span>{pName}</span>
      <div className='buttonLay'>
      <Link><button className='sourceBtn'>Source Code</button></Link>
      <Link><button className='demoBtn'>Live Demo</button></Link>
      </div>
    </div>
  )
}

export default ProjectItem