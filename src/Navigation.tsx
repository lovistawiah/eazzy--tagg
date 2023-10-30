import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import Logo from "./assets/logo.png";
import { Link } from "react-router-dom";
const Navigation = () => {
  const handleMenuToggle = () => {
    setOpen(!isOpen);
  };
  const [isOpen, setOpen] = useState(true);

  return (
    <>
      <nav className="nav">
        <Link to="/">
          <img src={Logo} alt="logo" className="menu" />
        </Link>
        <div onClick={handleMenuToggle}>
          {isOpen ? (
            <FontAwesomeIcon icon={faBars} />
          ) : (
            <FontAwesomeIcon icon={faCircleXmark}  />
          )}
        </div>
      </nav>
      <section
        className="mobile-nav-items"
        style={{ display: !isOpen ? "block" : "none" }}
      >
        <ul>
          <Link to="#services">
            <li>Our Services</li>
          </Link>
          <Link to="#pricing">
            <li>Pricing</li>
          </Link>
          <Link to="#team">
            <li>Team</li>
          </Link>
          <Link to="#gallery">
            <li>Gallery</li>
          </Link>
          <Link to="#contact">
            <li>Contact Us</li>
          </Link>
          <li className="nav-btns">
            <button>Sign in</button>
          </li>
        </ul>
      </section>
    </>
  );
};
export default Navigation;
