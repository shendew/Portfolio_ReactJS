import React from 'react'
import './Intro.css'
import bg from '../../img/me.png'
import { Link } from 'react-scroll'
function Intro() {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>theDevSL</span><br/>Mobile App Developer</span>
            <p className='introPara'>I am a skilled mobile app developer with experience in creating</p>
            {/* <button className='btn'>Hire me</button> */}
            <button className='btn' onClick={()=>{document.getElementById("contact").scrollIntoView({behavior:'smooth'});}}>Hire me</button>
        </div>
        <img src={bg} alt='Profile' className='bg'/>
    </section>
  )
}

export default Intro