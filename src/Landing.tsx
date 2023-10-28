import groupImg from "./assets/group.png"
const Landing = () => {
  return (
    <div>
      <img  src={groupImg} alt="" className="bg-banner"/>
      <div className="over-text">
        <section className="first-cta-text">
          <span className="body-text"> We have Digital Registration</span>
          <span className="brand-text">
            experience and <span className="info-text">beyond</span>
          </span>
        </section>
        <section className="second-cta-text">
          Digital event platform designed to offer every global business the
          real exhibition feeling
        </section>
        <section className="cta">
          <button className="cta-btn">Request Demo</button>
          <a href="#" className="pricing-link">
            About Us
          </a>
        </section>
      </div>
    </div>
  );
};
export default Landing;
