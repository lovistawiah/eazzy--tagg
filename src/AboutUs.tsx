import Creativity from './assets/Creativity'
import team from './assets/team.jpg'
import ghAviation from "./assets/gh aviation.png"
import mcdan from './assets/mcdan.png'
import numbersBg from './assets/numbers-bg.jpg'
const AboutUs = () => {
  return (
    <section className="main-section">
      <section className="img-mask">
        <img src={team} alt="" className="team-img" />
      </section>

      <h4 className="mini-header">Our Achievements</h4>
      <h1 className="header">Stuff About Us</h1>

      <section className="desc-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
        eaque!
      </section>

      <section className="main-info-holder">
        <section className="info">
          <Creativity />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </section>
        <section className="info">
          <Creativity />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </section>
        <section className="info">
          <Creativity />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </section>
        <section className="info">
          <Creativity />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </section>
      </section>

      <section className="clients">
        <section className="client">
          <img src={ghAviation} alt="" />
        </section>
        <section className="client">
          <img src={mcdan} alt="" />
        </section>
        <section className="client">
          <img src={mcdan} alt="" />
        </section>
        <section className="client">
          <img src={mcdan} alt="" />
        </section>
        <section className="client">
          <img src={mcdan} alt="" />
        </section>
        <section className="client">
          <img src={mcdan} alt="" />
        </section>
        <section className="client">
          <img src={mcdan} alt="" />
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