import footerLogo from "./assets/logo2.png";
import Phone from "./assets/Phone";
import fb from "./assets/fb.png";
import twitter from "./assets/twitter.png";
import instragram from "./assets/instagram.png";
import linkedIn from "./assets/linkedin.png";

const Footer = () => {
  return (
    <footer className="main-section">
      <section className="footer-img">
        <img src={footerLogo} alt="" />
      </section>
      <section className="desc-text footer-desc">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
        atque minima quis repudiandae temporibus, aut
      </section>
      <section className="sub-features">

        <section className="header-section">
          <h3>Company</h3>
          <p>Our Services</p>
          <p>Team</p>
          <p>Pricing</p>
        </section>

        <section className="enquiry-text">
          <h3>We love to make your Event Registration seamlessly</h3>
        <button>Make an enquiry</button>
        </section>
      </section>

      <section className="bolder-phone">
        <Phone />
        <span>
          <h2>024 476 8737</h2>
        </span>
      </section>
      <section className="copyright">
        Copyright &copy; 2023 | a product of Eazy-Tagg
      </section>
      <div className="line"></div>

      <section className="social-platform">
        <img src={fb} alt="" />
        <img src={twitter} alt="" />
        <img src={instragram} alt="" />
        <img src={linkedIn} alt="" />
      </section>
    </footer>
  );
};
export default Footer;
