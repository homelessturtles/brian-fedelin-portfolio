import React from 'react'
import tree from '../assets/lowpolytree.png'
import '../styles/Home.css'
import down from '../assets/down-arrow-two.svg'

const Home = ({arrow, setArrow}) => {

  return (
    <div className='home'>
      <div className='hero'>
        <div className='tree-container'>
          <img src={tree} className='tree'/>
        </div>
        <div className='intro-container'>
          <div className='intro'>
            <h3>Hi, I'm Brian!</h3>
            <p>Creating customized interfaces to make your dream site come to life!</p>
          </div>
        </div>
      </div>
      {arrow && <div className='down-arrow'>
        <img src={down}></img>
      </div>}
    </div>
  )
}

export default Home