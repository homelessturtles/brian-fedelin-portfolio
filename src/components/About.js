import React from 'react'
import '../styles/About.css'
import rockimg from '../assets/Rock.png'
import sfImg from '../assets/SanFrancisco.png'
import speaker from '../assets/Speaker.png'
import Progress from './Progress'
import Links from './Links'

const About = () => {
  const toggleAbout = (number) => {
    const aboutItem = document.querySelectorAll('.about-info')[number];
    if(aboutItem.style.opacity==0){
      aboutItem.style.opacity=1
      aboutItem.style.marginBottom='0'
      aboutItem.style.width='14rem'
      aboutItem.style.fontSize='0.75rem';
    }
    else{
      aboutItem.style.opacity=0
      aboutItem.style.marginBottom='-13rem'
      aboutItem.style.width='5rem'
      aboutItem.style.fontSize='0.5rem';
    }
  }
  return (
    <>
      <div className='about'>
        <div className='about-container'>
          <div className='about-item'>
            <div className='about-info' style={{backgroundColor: '#357C72'}}><p>I was born and raised in the San Francisco Bay Area!</p></div>
            <img src={sfImg} onClick={()=>{toggleAbout(0)}}/>
          </div>
          <div className='about-item'>
            <div className='about-info' style={{backgroundColor: '#DFA639'}}><p>Recently I started bouldering and have become addicted to it. You can catch me climbing at Dogpatch most days of the week.</p></div>
            <img src={rockimg} onClick={()=>{toggleAbout(1)}}/>
          </div>
          <div className='about-item'>
            <div className='about-info' style={{backgroundColor: '#D2542E'}}><p>Music inspires almost everything I do. Occasionally, I make music under the name Homelessturtles!</p></div>
            <img src={speaker} onClick={()=>{toggleAbout(2)}}/>
          </div>
        </div>
        <div>
          <h3>Tap an Image to Learn More</h3>
        </div>
      </div>
    </>
  )
}

export default About