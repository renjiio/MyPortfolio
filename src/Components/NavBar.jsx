import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/NavBar.css";
import mmlogo from "../Images/m&mlogo.png";
import { Link } from "react-scroll";

function NavBar() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <img className="logopng" src={mmlogo} />
      <nav ref={navRef}>
        <a href="/">Home</a>
        <Link
          to="AboutMe"
          onClick={showNavBar}
          spy={true}
          smooth={true}
          offset={0}
          duration={2000}
        >
          About Me
        </Link>

        <Link
          to="MyWork"
          onClick={showNavBar}
          spy={true}
          smooth={true}
          offset={0}
          duration={2000}
        >
          My Work
        </Link>

        <Link
          to="Contact"
          onClick={showNavBar}
          spy={true}
          smooth={true}
          offset={0}
          duration={2000}
        >
          Contact Me
        </Link>

        <Link
          to="Comment"
          onClick={showNavBar}
          spy={true}
          smooth={true}
          offset={0}
          duration={2000}
        >
          Comment
        </Link>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );
}
export default NavBar;
