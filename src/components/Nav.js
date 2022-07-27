import React, { useEffect, useState } from 'react'
import '../styles/Nav.css'
import hamburger from '../assets/hamburger.svg'
import x from '../assets/x.svg'
import email from '../assets/email.svg'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false)
  useEffect(()=>{
    document.querySelector('.App').addEventListener('click', (e)=>{
      console.log(e.target.className)
      if(e.target.className === 'nav-links-mobile' || e.target.className ==='nav-links-mobile-list'){
        setShowMenu(true)
      }
      else{
        setShowMenu(false)
      }
    })
  }, [])
  return (
    <div className='navbar'>
      <div className='logo'>
        <h1><a href='#home-section'>BrianFedelin</a></h1>
      </div>
      <ul className='nav-links'>
        <a href='#projects-section'>Projects</a>
        <a href='#about-section'>About Me</a>
        <a href='#contact-section'>Contact</a>
        <a href="mailto: brianfedelin1@gmail.com"><img src={email} style={{width: '1.5rem'}}></img></a>
        <a href="https://github.com/homelessturtles" target="_blank"><img src={github} style={{width: '1.5rem'}}></img></a>
        <a href="https://www.linkedin.com/in/brianfedelin/" target="_blank"><img src={linkedin} style={{width: '1.5rem'}}></img></a>
      </ul>
      <div className='nav-links-mobile-container'>
        <img className='hamburger' src={hamburger} onClick={()=>{setShowMenu(true)}}/>
        {showMenu && <div className='nav-links-mobile'>
          <div className='nav-links-mobile-list'>
            <a href='#projects-section' onClick={()=>{setShowMenu(false)}}>Projects</a>
            <a href='#about-section' onClick={()=>{setShowMenu(false)}}>About Me</a>
            <a href='#contact-section' onClick={()=>{setShowMenu(false)}}>Contact</a>
            <a href="mailto: brianfedelin1@gmail.com"><img src={email} style={{width: '2.5rem'}}></img></a>
            <a href="https://github.com/homelessturtles"><img src={github} style={{width: '2.5rem'}}></img></a>
            <a href="https://www.linkedin.com/in/brianfedelin/"><img src={linkedin} style={{width: '2.5rem'}}></img></a>
          </div>
        </div>}
      </div>
    </div>
  )
}

export default Nav