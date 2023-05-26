
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './Components/Home';
import Crew from './Components/Crew';
import Technology from './Components/Technology';
import logo from './assets/home/circle-on-nav.png';
import line from './assets/home/Rectangle.png';
import DestinationComponent from './Components/DestinationComponent';
import Cart from './Cart/Cart';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(true);
    document.querySelector(".burger").classList.add("open");
  };
  
  const closeMenu = () => {
    setMenuOpen(false);
    document.querySelector(".burger").classList.remove("open");
  };

  return (
    <div className="App">
      <header>
        <Router>
          <nav className='desktop-nav' >
            <div className='logo'>
              <img className='logo-line' src={logo} alt="logo"  />
            </div>
            <div>
              <img className='line-nav' src={line} alt="line" />
            </div>
            <div className='nav-container'>
              <Link className='link link-first-child link-active' to="/"><span className='number'>00</span> Home</Link>
              <Link className='link link-active' to="/destination"><span className='number'>01</span> Destination</Link>
              <Link className='link link-active' to="/crew"><span className='number'>02</span> Crew</Link>
              <Link className='link link-active' to="/technology"><span className='number'>03</span> Technology</Link>
              <Link className='link link-last-child link-active' to="/cart"><span className='number'>04</span> Cart</Link>
            </div>
            <div className="burger" onClick={openMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>
          {menuOpen && (
    <div className="overlay" onClick={closeMenu}>
      <div className="menu">
        <button className="close-button" onClick={closeMenu}>&times;</button>
        <nav>
          <Link className='link' onClick={closeMenu} to="/"><span className='number'>00</span> Home</Link>
          <Link className='link' onClick={closeMenu} to="/destination"><span className='number'>01</span> Destination</Link>
          <Link className='link' onClick={closeMenu} to="/crew"><span className='number'>02</span> Crew</Link>
          <Link className='link' onClick={closeMenu} to="/technology"><span className='number'>03</span> Technology</Link>
          <Link className='link' onClick={closeMenu} to="/cart"><span className='number'>04</span> Cart</Link>
        </nav>
      </div>
    </div>
  )}
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/destination" element={<DestinationComponent />}></Route>
            <Route path="/crew" element={<Crew />}></Route>
            <Route path="/technology" element={<Technology />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
