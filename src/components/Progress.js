import React from 'react'
import '../styles/Progress.css'
import {useState, useEffect} from 'react'

const Progress = ({progress}) => {
  const [scrollPosition, setScrollPosition] = useState(null)
  useEffect(()=>{
    const handleScroll = () => {
      console.log('scroll down')
    }
    document.addEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className='progress'>
      <div className='top-line'></div>
      {
        progress===1 ? <div className='current-page-dot'></div> : <div className='page-dot'></div>
      }
      {
        progress===2 ? <div className='current-page-dot'></div> : <div className='page-dot'></div>
      }
      {
        progress===3 ? <div className='current-page-dot'></div> : <div className='page-dot'></div>
      }
      <div className='bottom-line'></div>
    </div>
  )
}

export default Progress