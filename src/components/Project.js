import React from 'react'
import '../styles/Projects.css'

const Project = ({img, name, description, ref}) => {
  return (
    <div className='project-container'>
      <img src={img} />
      <div className='project-description'>
        <h3>{name}</h3>
        <p>{description} </p>
        <div className='view-project-btn'>
          View Full Project
        </div>
      </div>
    </div>
  )
}

export default Project