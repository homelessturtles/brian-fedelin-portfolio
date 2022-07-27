import React from 'react'
import email from '../assets/email.svg'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import '../styles/Links.css'
import Popout from './Popout'
import {useState} from 'react'

const Links = () => {
  const [isPopout, setIsPopout] = useState(false)
  return (
    <>
      <div className='links-container'>
        <div className='links'>
          <img src={email} onClick={()=>{setIsPopout(!isPopout)}}/>
          <img src={linkedin} />
          <img src={github} />
        </div>
      </div>
      {isPopout && <Popout isPopout={isPopout} setIsPopout={setIsPopout}/>}
    </>
  )
}

export default Links