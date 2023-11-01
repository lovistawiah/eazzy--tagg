import { useEffect, useState } from "react";
import groupImg from "./assets/group.png";
import bgVideo from "./assets/bg-video.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Landing = () => {
  const [bodyWidth, setBodyWidth] = useState(document.body.clientWidth);
  useEffect(() => {
    const handleResize = () => {
      setBodyWidth(document.body.clientWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.addEventListener("resize", handleResize);
  }, [bodyWidth]);
  return (
    <div className="landing-page">
      {bodyWidth > 1020 ? (
        <video loop autoPlay muted className="bg-banner">
          <source src={bgVideo}></source>
        </video>
      ) : (
        <img src={groupImg} alt="" className="bg-banner" />
      )}
      <div className="over-text">
        <section className="welcome-message">hello,</section>
        <p className="intro-text">
          We are <span>Event Registration</span>
        </p>
        <p className="short-bio">
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia eos libero omnis sunt accusamus
        </p>
        <button className="btn">Request Demo</button>
      </div>
      {bodyWidth > 1020 ? (
        <section className="social-media">
          <div className="media-icon">
            <FontAwesomeIcon icon={faFacebookF} />
          </div>
          <div className="media-icon">
            <FontAwesomeIcon icon={faTwitter} />
          </div>
          <div className="media-icon">
            <FontAwesomeIcon icon={faInstagram} />
          </div>
          <div className="media-icon">
            <FontAwesomeIcon icon={faYoutube} />
          </div>
        </section>
      ) : null}
    </div>
  );
};
export default Landing;
