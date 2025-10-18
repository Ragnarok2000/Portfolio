import React from 'react'
import './service.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Service = () => {
  return (
    <div id='services' className='service'>
      <div className="service-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="service-container">
        {Services_Data.map((service,index)=>{
          return <div className="service-format" key={index} >
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            <div className="service-readmore">
              <p>Read More</p>
              <img src={arrow_icon} alt="" />
            </div>
          </div>
        })}
      </div>
    </div>
  )
}


export default Service
