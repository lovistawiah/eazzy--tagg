import { useEffect, useState } from "react";
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
          <a href="/">
            <li>Home</li>
          </a>
          <a href="/">
            <li>Our Services</li>
          </a>
          <a href="/">
            <li>Pricing</li>
          </a>
          <a href="/">
            <li>Team</li>
          </a>
          <a href="/">
            <li>Gallery</li>
          </a>
          <a href="/">
            <li>Contact Us</li>
          </a>
          
        </ul>
      </nav>
    </>
  );
};
export default Navigation;
