import team from './assets/team.jpg'
import mcdan from './assets/mcdan.png'
import numbersBg from './assets/numbers-bg.jpg'
import interPlast from './assets/interplast.png'
import fda from './assets/fda.png'
import commerce from './assets/commerce.png'
import fintech from './assets/fintech.png'
import instinctWave from './assets/instinct wave.png'
import cimg from './assets/cimg.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faMedal,faLightbulb, faBoltLightning, faHandshake } from '@fortawesome/free-solid-svg-icons'
const AboutUs = () => {
  return (
    <section className="main-section about-us">
      <div className="about-us-intro">
        <section className="img-mask">
          <img src={team} alt="" className="team-img" />
        </section>
        <div className="about-us-text">
          <h4 className="mini-header">Our Achievements</h4>
          <h1 className="header">Stuff About Us</h1>

          <section className="desc-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            eaque!
          </section>

          <section className="main-info-holder">
            <section className="info">
              <FontAwesomeIcon icon={faLightbulb} />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </section>
            <section className="info">
              <FontAwesomeIcon icon={faMedal} />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </section>
            <section className="info">
              <FontAwesomeIcon icon={faBoltLightning} />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </section>
            <section className="info">
              <FontAwesomeIcon icon={faHandshake} />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </section>
          </section>
        </div>
        
      </div>

      <section className="clients">
        <section className="client">
          <img src={fda} alt="" />
        </section>
        <section className="client">
          <img src={interPlast} alt="" />
        </section>
        <section className="client">
          <img src={mcdan} alt="" />
        </section>
        <section className="client">
          <img src={commerce} alt="" />
        </section>
        <section className="client">
          <img src={fintech} alt="" />
        </section>
        <section className="client">
          <img src={instinctWave} alt="" />
        </section>
        <section className="client">
          <img src={cimg} alt="" />
        </section>
      </section>

      <section className="numbers">
        <img src={numbersBg} alt="" />
        <ul className="number-list">
          <li className="number-item">
            <section>
              <h4>100+</h4>
              <p>Successful Events</p>
            </section>
          </li>
          <li className="number-item">
            <section>
              <h4>80+</h4>
              <p>Happy Clients</p>
            </section>
          </li>
          <li className="number-item">
            <section>
              <h4>30+</h4>
              <p>Registration Booths</p>
            </section>
          </li>
          <li className="number-item">
            <section>
              <h4>10K+</h4>
              <p>Registered Participants</p>
            </section>
          </li>
          <li className="number-item">
            <section>
              <h4>4</h4>
              <p>Countries Visited</p>
            </section>
          </li>
        </ul>
      </section>
    </section>
  );
}
export default AboutUs