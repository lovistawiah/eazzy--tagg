import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faDigitalTachograph,
  faGlobe,
  faPenToSquare,
  faPrint,
  faTicket,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section className="main-section">
      <h4 className="mini-header">We work for your best experience</h4>
      <h1 className="header">Our Services</h1>
      <section className="desc-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error,
        doloribus.
      </section>
      {/* service */}
      <section className="services">
        <section className="service">
          <FontAwesomeIcon icon={faTicket} className="service-logo" />
          <h3 className="service-name">E-ticketing Solutions</h3>
          <section className="service-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
            ratione, incidunt nemo et distinctio commodi. At, id quam
            perferendis asperiores repellat, reprehenderit voluptates illum
            facere qui omnis porro quis rerum.
          </section>
          <Link to="#" className="service-link">
            Know more
            <FontAwesomeIcon icon={faArrowRight} className="link-icon" />
          </Link>
        </section>

        <section className="service">
          <FontAwesomeIcon icon={faUserTie} className="service-logo" />
          <h3 className="service-name">Tablet/Stand Rental</h3>
          <section className="service-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
            ratione, incidunt nemo et distinctio commodi. At, id quam
            perferendis asperiores repellat, reprehenderit voluptates illum
            facere qui omnis porro quis rerum.
          </section>
          <Link to="#" className="service-link">
            Know more
            <FontAwesomeIcon icon={faArrowRight} className="link-icon" />
          </Link>
        </section>
        <section className="service">
          <FontAwesomeIcon
            icon={faDigitalTachograph}
            className="service-logo"
          />
          <h3 className="service-name">Digital Event Registration</h3>
          <section className="service-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
            ratione, incidunt nemo et distinctio commodi. At, id quam
            perferendis asperiores repellat, reprehenderit voluptates illum
            facere qui omnis porro quis rerum.
          </section>
          <Link to="#" className="service-link">
            Know more
            <FontAwesomeIcon icon={faArrowRight} className="link-icon" />
          </Link>
        </section>

        <section className="service">
          <FontAwesomeIcon icon={faPenToSquare} className="service-logo" />
          <h3 className="service-name">Bespoke System Development</h3>
          <section className="service-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
            ratione, incidunt nemo et distinctio commodi. At, id quam
            perferendis asperiores repellat, reprehenderit voluptates illum
            facere qui omnis porro quis rerum.
          </section>
          <Link to="#" className="service-link">
            Know more
            <FontAwesomeIcon icon={faArrowRight} className="link-icon" />
          </Link>
        </section>
        <section className="service">
          <FontAwesomeIcon icon={faPrint} className="service-logo" />
          <h3 className="service-name">General Printing</h3>
          <section className="service-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
            ratione, incidunt nemo et distinctio commodi. At, id quam
            perferendis asperiores repellat, reprehenderit voluptates illum
            facere qui omnis porro quis rerum.
          </section>
          <Link to="#" className="service-link">
            Know more
            <FontAwesomeIcon icon={faArrowRight} className="link-icon" />
          </Link>
        </section>

        <section className="service">
          <FontAwesomeIcon
            icon={faGlobe }
            className="service-logo"
          />
          <h3 className="service-name">Web Development</h3>
          <section className="service-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
            ratione, incidunt nemo et distinctio commodi. At, id quam
            perferendis asperiores repellat, reprehenderit voluptates illum
            facere qui omnis porro quis rerum.
          </section>
          <Link to="#" className="service-link">
            Know more
            <FontAwesomeIcon icon={faArrowRight} className="link-icon" />
          </Link>
        </section>
      </section>
    </section>
  );
};
export default Services;
