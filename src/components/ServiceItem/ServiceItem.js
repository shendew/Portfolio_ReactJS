import React from 'react'
import './ServiceItem.css'
import {  useNavigate } from 'react-router-dom'
const ServiceItem = ({pack}) => {
    const navigate=useNavigate();
  return (
    <div className='serviceItem'>
        <div className='emp'></div>
        <span className='packTitle'>{pack.Title}</span>
        <span className='packPrice'>LKR {pack.Price}.00</span>

        <ul className='packFeatures'>
            {
                pack.Features.map((value, index, array) => {
                    return(
                        <span>{value.ftitle}</span>
                    )
                })
            }
            
        </ul>
        {/* <Link> */}
        <button className='buyButton' onClick={()=>navigate('confirm',{state:pack})}>Buy </button>
        {/* </Link> */}
        
    </div>
  )
}

export default ServiceItem