import { useRef,useEffect, Component } from 'react';
import link from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa';
import "../Styles/NavBar.css";
import mmlogo from '../Images/m&mlogo.png';
const ScrollLink = Scroll.ScrollLink

function NavBar() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");

  }
  
  return (
    <header>
      <img className="logopng" src={mmlogo} />
      <nav ref={navRef}>
        <a href="/">Home</a>
        
        <Link to="MyWork" spy={true} smooth={true} offset={50} duration={500}>My Work</Link>
        
        <a href="/#">Contact</a>
        <a href="/#">About Me</a>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes/>
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars/>
      </button>
    </header>
  )
}
export default NavBar;