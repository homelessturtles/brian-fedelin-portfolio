import React, { useState, useEffect } from 'react'
import '../styles/Up.css'

const Up = ({showUp, setShowUp}) => {
  return (
    <>
      {
        showUp===true && 
        <div className='up'>
          <h3 onClick={()=>{document.querySelector('.App').scrollTop=0}}>scroll up</h3>
        </div>
      }
    </>
  )
}

export default Up