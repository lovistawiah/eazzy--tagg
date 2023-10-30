import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <section className="main-section">
      <h4 className="mini-header">Feel free to contact us</h4>
      <h1 className="header">Contact Us</h1>
      <section className="desc-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
        cupiditate!
      </section>

      <form>
        <div className="input">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter your name" />
        </div>
        <div className="input">
          <label htmlFor="email">Email</label>
          <input type="email" id="name" placeholder="Enter your email" />
        </div>
        <div className="input">
          <label htmlFor="message">Message</label>

          <textarea name="" id="message"></textarea>
        </div>
        <button className="send">Send</button>
      </form>
      <section className="sub-section">
        <section className="info-main">
          <section className="logo-text">
            <FontAwesomeIcon icon={faPhone} />
            <span>Phone</span>
          </section>
          <section className="info-text">
            <p>0267443768</p>
            <p>0244768737</p>
          </section>
        </section>

        <section className="info-main">
          <section className="logo-text">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Address</span>
          </section>
          <section className="info-text">
            <p>3rd, Avenue</p>
            <p>Greda Estates</p>
          </section>
        </section>
        <section className="info-main">
          <section className="logo-text">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>Others</span>
          </section>
          <section className="info-text">
            <p>info@eazytagg.com</p>
          </section>
        </section>
      </section>
    </section>
  );
};
export default Contact;
