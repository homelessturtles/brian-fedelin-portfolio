import './styles/App.css';
import Nav from './components/Nav.js'
import Home from './components/Home.js'
import Projects from './components/Projects.js'
import About from './components/About.js'
import Progress from './components/Progress';
import Up from './components/Up'
import Contact from './components/Contact';
import Links from './components/Links'
import { Outlet } from 'react-router-dom';
import {useEffect, useState} from 'react'

function App() {
  const [showUp, setShowUp] = useState()
  const [arrow, setArrow] = useState(true)
  useEffect(()=>{
    setShowUp(false)
    document.querySelector('.App').addEventListener('scroll', ()=>{
        if(document.querySelector('.App').scrollTop>300){
          setShowUp(true)}
        else{
          setShowUp(false)
        }
      }
    )
  }, [])
  
  return (
    <div className="App" onScroll={()=>{setArrow(false)}}>
      <Nav />
      <section className='home-section' id='home-section'>
        <Home arrow={arrow} setArrow={setArrow}/>
      </section>
      <section className='projects-section' id='projects-section'>
        <Projects />
      </section>
      <section className='about-section' id='about-section'>
        <About />
      </section>
      <section className='contact-section' id='contact-section'>
        <Contact />
      </section>
    </div>
  );
}

export default App;
