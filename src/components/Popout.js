import React, { useEffect } from 'react'
import copy from '../assets/copy.svg'
import '../styles/Popout.css'

const Popout = ({isPopout, setIsPopout}) => {
  return (
    <div className='popout-container' onClick={(e)=>{
        if(e.target.className==='popout-container'){
          setIsPopout(false)
        }
      }}>
      <div className='popout'>
        <p>Brianfedelin1@gmail.com</p>
        <div>
          <img src={copy} onClick={()=>{
            navigator.clipboard.writeText('Brianfedelin1@gmail.com');
            document.querySelector('.copy-message').style.display='block'
            setTimeout(()=>{document.querySelector('.copy-message').style.display='none'}, 1000)
          }}/>
        </div>
        <div className='copy-message'>
          <p>Email Copied To Clipboard!</p>
        </div>
      </div>
    </div>
  )
}

export default Popout