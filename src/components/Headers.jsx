import React, { useState, useEffect } from 'react';
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';
import { BiMenuAltRight, BiX } from 'react-icons/bi';
import logo from '../assets/logo.png';

function Headers() {
  const [sticky, setSticky] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setSticky(window.scrollY > 0);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    return (
      <header className={sticky ? "sticky" : ""}>
        <a href="#" className="logo"><img src={logo} alt="Logo" /></a>
        <ul className={`navmenu ${menuOpen ? 'open' : ''}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div className="nav-icon">
          <a href="#"><FaSearch /></a>
          <a href="#"><FaUser /></a>
          <a href="#"><FaShoppingCart /></a>
          <div id="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <BiX size={30} /> : <BiMenuAltRight size={30} />}
          </div>
        </div>
      </header>
    );
  }

export default Headers