import React from 'react'
import '../styles/Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-container'>
        <div className='header-container'>
          <h3>Shoot Me a Message!</h3>
        </div>
        <form className='contact-form'>
          <input type='text' id='name' placeholder='name' required></input>
          <input type='text' placeholder='email' id='email' required></input>
          <textarea placeholder='message' id='message' required></textarea>
          <button type='submit' className='submit-btn'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact