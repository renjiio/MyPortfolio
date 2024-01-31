import "../Styles/ProjectBar.css";
import { FaHome } from "react-icons/fa";
import mmlogo from "../Images/m&mlogo.png";
import { NavLink } from "react-router-dom";

function ProjectBar() {
  return (
    <headerProject>
      <img className="logopng1" src={mmlogo} />

        <a href="/" style={{ color: "inherit", textDecoration: "inherit" }} className="nav-home">
          <FaHome />
        </a>

    </headerProject>
  );
}

export default ProjectBar;
