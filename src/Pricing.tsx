import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
const Pricing = () => {
  return (
    <section className="main-section" id="pricing">
      <h4 className="mini-header">Pricing to fit your needs</h4>
      <h1 className="header">Pricing Plans</h1>
      <section className="desc-text">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae,
        dolor.
      </section>
      <section className="prices">
        <section className="price">
          <h4>DATA COLLECTION</h4>

          <section className="price-text">
            GHS<span className="number">10</span> / head
            <div className="line"></div>
          </section>

          <section className="features">
            <h5 className="feature-text">Top Features:</h5>
            <p className="feature">
              <FontAwesomeIcon icon={faCircleCheck} />
              <span>Onsite Registration</span>
            </p>
            <p className="feature">
               <FontAwesomeIcon icon={faCircleCheck} />
              <span>Digital Data Presentation</span>
            </p>
            <p className="feature">
               <FontAwesomeIcon icon={faCircleCheck} />
              <span>Instant Participant Rating</span>
            </p>
            <p className="feature">
               <FontAwesomeIcon icon={faCircleCheck} />
              <span>Thank You SMS After Event</span>
            </p>
          </section>

          <button className="quote-btn">
            Call To Order
            </button>
        </section>

        <section className="price">
          <h4>STARTER</h4>

          <section className="price-text">
            GHS<span className="number">15</span> / head
            <div className="line"></div>
          </section>

          <section className="features">
            <h5 className="feature-text">Top Features:</h5>
            <p className="feature">
               <FontAwesomeIcon icon={faCircleCheck} />
              <span>Onsite Registration</span>
            </p>
            <p className="feature">
               <FontAwesomeIcon icon={faCircleCheck} />
              <span>Digital Data Presentation</span>
            </p>
            <p className="feature">
               <FontAwesomeIcon icon={faCircleCheck} />
              <span>Instant Participant Rating</span>
            </p>
            <p className="feature">
               <FontAwesomeIcon icon={faCircleCheck} />
              <span>Thank You SMS After Event</span>
            </p>
            <p className="feature">
               <FontAwesomeIcon icon={faCircleCheck} />
              <span>Customized App for Registration</span>
            </p>
            <p className="feature">
               <FontAwesomeIcon icon={faCircleCheck} />
              <span>Online Registration</span>
            </p>
            <p className="feature">
               <FontAwesomeIcon icon={faCircleCheck} />
              <span>Data Hosting for 3 months</span>
            </p>
          </section>

          <button className="quote-btn">
            Order Now
            </button>
        </section>

        <section className="price">
          <h4>BUSINESS</h4>
            <section className="ribbon">
              <span>Popular</span>
            </section>
          <section className="price-text">
            GHS<span className="number">25</span> / head
            <div className="line"></div>
          </section>

          <section className="features">
            <h5 className="feature-text">Top Features:</h5>
            <p className="feature">
               <FontAwesomeIcon icon={faCircleCheck} />
              <span>Onsite Registration</span>
            </p>
            <p className="feature">
               <FontAwesomeIcon icon={faCircleCheck} />
              <span>Digital Data Presentation</span>
            </p>
            <p className="feature">
               <FontAwesomeIcon icon={faCircleCheck} />
              <span>Instant Participant Rating</span>
            </p>
            <p className="feature">
               <FontAwesomeIcon icon={faCircleCheck} />
              <span>Thank You SMS After Event</span>
            </p>
            <p className="feature">
               <FontAwesomeIcon icon={faCircleCheck} />
              <span>Customized App for Registration</span>
            </p>
            <p className="feature">
               <FontAwesomeIcon icon={faCircleCheck} />
              <span>Online Registration</span>
            </p>
            <p className="feature">
               <FontAwesomeIcon icon={faCircleCheck} />
              <span>Life Time Data Hosting</span>
            </p>
          </section>
          <button className="quote-btn">
            Order Now
            </button>
        </section>
        <section className="price">
          <h4>PREMIUM</h4>
        
          <section className="price-text">
            GHS<span className="number">35</span> / head
            <div className="line"></div>
          </section>

          <section className="features">
            <h5 className="feature-text">Top Features:</h5>
            <p className="feature">
               <FontAwesomeIcon icon={faCircleCheck} />
              <span>Onsite Registration</span>
            </p>
            <p className="feature">
               <FontAwesomeIcon icon={faCircleCheck} />
              <span>Digital Data Presentation</span>
            </p>
            <p className="feature">
               <FontAwesomeIcon icon={faCircleCheck} />
              <span>Instant Participant Rating</span>
            </p>
            <p className="feature">
               <FontAwesomeIcon icon={faCircleCheck} />
              <span>Thank You SMS After Event</span>
            </p>
            <p className="feature">
               <FontAwesomeIcon icon={faCircleCheck} />
              <span>Customized App for Registration</span>
            </p>
            <p className="feature">
               <FontAwesomeIcon icon={faCircleCheck} />
              <span>Online Registration</span>
            </p>
            <p className="feature">
               <FontAwesomeIcon icon={faCircleCheck} />
              <span>Life Time Data Hosting</span>
            </p>
          </section>
          <button className="quote-btn">
            Order Now
            </button>
        </section>
      </section>
    </section>
  );
};
export default Pricing;
