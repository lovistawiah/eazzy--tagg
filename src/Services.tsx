import eTicket from "./assets/e-ticketing.svg";
const Services = () => {
  return (
    <div className="services">
      <section className="header-text">
        <h4>Our Services</h4>
        <section>
          We have Services that lead the way to better the success of your event
        </section>
      </section>
      <section className="services-holder">
        <section className="service">
          <section className="img-holder">
            <img src={eTicket} alt="" />
          </section>
          <h3>E-ticketing Solution</h3>
          <section className="service-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
            suscipit consectetur reprehenderit ab in alias earum placeat. Maxime
            voluptates ipsum at, doloremque quo non, exercitationem pariatur,
            sit quaerat qui fugiat!
          </section>
        </section>
        <section className="service">
          <section className="img-holder">
            <img src={eTicket} alt="" />
          </section>
          <h3>E-ticketing Solution</h3>
          <section className="service-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
            suscipit consectetur reprehenderit ab in alias earum placeat. Maxime
            voluptates ipsum at, doloremque quo non, exercitationem pariatur,
            sit quaerat qui fugiat!
          </section>
        </section>
        <section className="service">
          <section className="img-holder">
            <img src={eTicket} alt="" />
          </section>
          <h3>E-ticketing Solution</h3>
          <section className="service-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
            suscipit consectetur reprehenderit ab in alias earum placeat. Maxime
            voluptates ipsum at, doloremque quo non, exercitationem pariatur,
            sit quaerat qui fugiat!
          </section>
        </section>
      </section>
    </div>
  );
};
export default Services;
