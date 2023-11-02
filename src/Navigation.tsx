import {  useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import Logo from "./assets/logo.png";
import { Link } from "react-router-dom";
const Navigation = () => {
  const toggleNavbar = () => {
    setOpen(!isOpen);
  };
  const [isOpen, setOpen] = useState(true);
  return (
    <>
      <nav className="navbar">
        <div className="navheader">
          <div className="logo">
              <img src={Logo} alt="eazy tagg logo" />
          </div>
          <button className="toggle-button" onClick={toggleNavbar}>
            {isOpen ? (
              <FontAwesomeIcon icon={faBars} />
            ) : (
              <FontAwesomeIcon icon={faCircleXmark} />
            )}
          </button>
        </div>
        <ul className={`navbar-links ${!isOpen ? "active" : ""}`}>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/">
            <li>Our Services</li>
          </Link>
          <Link to="/">
            <li>Pricing</li>
          </Link>
          <Link to="/">
            <li>Team</li>
          </Link>
          <Link to="/">
            <li>Gallery</li>
          </Link>
          <Link to="/">
            <li>Contact Us</li>
          </Link>
          
        </ul>
      </nav>
    </>
  );
};
export default Navigation;
