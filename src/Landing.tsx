import groupImg from "./assets/group.png"
const Landing = () => {
  return (
    <div className="landing-page">
      <img src={groupImg} alt="" className="bg-banner" />
      <div className="over-text">
        <section className="welcome-message">hello,</section>
        <p className="intro-text">
          We are <span>Event Registration</span>
        </p>
        <p className="short-bio">
          company. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam commodi deleniti
        </p>
      <button className="btn">Request Demo</button>
      </div>
    </div>
  );
};
export default Landing;
