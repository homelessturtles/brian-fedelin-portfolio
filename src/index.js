import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import Home from './components/Home'
import Projects from './components/Projects';
import About from './components/About';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}> 
        <Route index element={<Projects />}/>
      </Route> 
    </Routes>
  </BrowserRouter>
);

