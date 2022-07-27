import React from 'react'
import kettlestore from '../assets/KettleStore.png'
import froggyStyle from '../assets/froggystyle.webp'
import gangnamStyle from '../assets/gangnamStyle.jpeg'
import Links from './Links'
import Progress from './Progress'
import '../styles/Projects.css'
import chevron from '../assets/rightChevron.svg'
import Project from './Project'
import {useState} from 'react'

const Projects = () => {
  const [progress, setProgress] = useState(0)
  const projects = [{
    img: kettlestore, 
    name: 'KettleStore', 
    description:'Created an eccomerce store to purchase an electronic kettle and thermos. This website featured diagrams of each product, along with a unique product page showcasing the different colors you can purchase.'
  }, {
    img: froggyStyle,
    name: 'FroggyStyle',
    description: 'you still doing doggystyle in 2022?? LMAAOOOO'
  }, {
    img: gangnamStyle,
    name: 'Gangnamstyle',
    description: 'op-opop-opop oppa gangnam style ayyyyyy sexy lady op-opop-opop oppa gangnam style'
  }]
  return (
    <>
      <div className='projects'>
        <div className='slider'>
          <div className='left-chevron'>
            <img src={chevron} onClick={()=>{progress===0 ? setProgress(2) : setProgress(progress-1)}}/>
          </div>
          <Project
            img={projects[progress].img} 
            name={projects[progress].name} 
            description={projects[progress].description} 
          />
          <div className='right-chevron'>
            <img src={chevron} onClick={()=>{progress===2 ? setProgress(0) : setProgress(progress+1)}}/>
          </div>
        </div>
        <div className='projects-progress'>
          {progress===0 ? <div className='current-project-dot' /> : <div className='project-dot' />}
          {progress===1 ? <div className='current-project-dot' /> : <div className='project-dot' />}
          {progress===2 ? <div className='current-project-dot' /> : <div className='project-dot' />}
        </div>
      </div>
    </>
  )
}

export default Projects