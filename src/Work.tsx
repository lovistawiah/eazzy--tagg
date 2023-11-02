import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import eventRegistration from "./assets/event-registration.jpg";
import printing from './assets/printing.jpg'
import badge from './assets/onsite badge.jpg'
import conference from './assets/conferencing.jpg'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Work = () => {
  return (
    <section className="main-section">
      <h4 className="mini-header">some of the project by us</h4>
      <h1 className="header">Our Works</h1>
      <section className="desc-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, culpa!
      </section>
      <section className="works">
        <section className="work">
          <img src={eventRegistration} className="fix-img-position" alt="" />
          <section className="work-info">
            <p className="work-type">Event registration</p>
            <section className="work-name">
              Contactless  Registration
            </section>
            <button className="view-more">
              view more <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </section>
        </section>

        <section className="work">
          <img src={badge} alt="" />
          <section className="work-info">
            <p className="work-type">Badges</p>
            <section className="work-name">Onsite Badge Printing</section>
            <button className="view-more">
              view more <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </section>
        </section>

        <section className="work">
          <img src={printing} alt="" />
          <section className="work-info">
            <p className="work-type">Printing</p>
            <section className="work-name">HD Color Large Printing</section>
            <button className="view-more">
              view more <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </section>
        </section>

        <section className="work">
          <img src={conference} alt="" />
          <section className="work-info">
            <p className="work-type">Conference</p>
            <section className="work-name">Live Attendance Tracking</section>
            <button className="view-more">
              view more <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </section>
        </section>

        <section className="work">
          <img src={badge} alt="" />
          <section className="work-info">
            <p className="work-type">Badges</p>
            <section className="work-name">Onsite Badge Printing</section>
            <button className="view-more">
              view more <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </section>
        </section>
        <section className="work">
          <img src={badge} alt="" />
          <section className="work-info">
            <p className="work-type">Badges</p>
            <section className="work-name">Onsite Badge Printing</section>
            <button className="view-more">
              view more <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </section>
        </section>
      </section>
    </section>
  );
};
export default Work;
