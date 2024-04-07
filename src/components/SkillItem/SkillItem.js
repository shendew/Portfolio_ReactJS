import React from 'react'
import './SkillItem.css'
import icon from '../../img/github.png'

function SkillItem({ SkillItemLogo,SkillItemName,SkillItemID}) {
  return (
    <div className='SkillitemContainer'>
        <img className='skillIcon' src={SkillItemLogo} />
        <span className='skillTitle'>{SkillItemName}</span>
    </div>
  )
}

export default SkillItem