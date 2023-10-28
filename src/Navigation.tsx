import { useState } from "react";
import Logo from "./assets/logo3.svg";
import MenuOpen from "./MenuOpen";
import MenuClose from "./MenuClose";
const Navigation = () => {
  const handleMenuToggle = () => {
    setOpen(!isOpen);
  };
  const [isOpen, setOpen] = useState(true);

  return (
    <>
      <nav className="nav">
        {/* adding div to make the logo appear center */}
        <div></div>
        <a href="#">
          <img src={Logo} alt="logo" />
        </a>
        <div onClick={handleMenuToggle}>
          {isOpen ? <MenuOpen /> : <MenuClose />}
        </div>
      </nav>
      <section
        className="mobile-nav-items"
        style={{ display: !isOpen ? "block" : "none" }}
      >
        <ul>
          <a href="">
            <li>Our Services</li>
          </a>
          <a href="">
            <li>Pricing</li>
          </a>
          <a href="">
            <li>Team</li>
          </a>
          <a href="">
            <li>Gallery</li>
          </a>

          <a href="">
            <li>Contact Us</li>
          </a>
          <li className="nav-btns">
            <button>Sign in</button>
          </li>
        </ul>
      </section>
    </>
  );
};
export default Navigation;
