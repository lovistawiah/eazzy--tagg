import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import Logo from "./assets/logo.png";
import { Link } from "react-router-dom";
const Navigation = () => {
  const handleMenuToggle = () => {
    setOpen(!isOpen);
  };
  const [isOpen, setOpen] = useState(true);
  const [bodyWidth, setBodyWidth] = useState(document.body.clientWidth);
  const [menuIcon, setMenuIcon] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setBodyWidth(document.body.clientWidth);
      bodyWidth < 1024 ? setMenuIcon(true) : setMenuIcon(false)
      console.log(bodyWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [bodyWidth]);

  return (
    <>
      <nav className="nav">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <div onClick={handleMenuToggle} style={{display: menuIcon ? 'initial': 'none'}}>
          {isOpen ? (
            <FontAwesomeIcon icon={faBars} />
          ) : (
            <FontAwesomeIcon icon={faCircleXmark} />
          )}
        </div>
      </nav>

      <section
        className="nav-items"
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
