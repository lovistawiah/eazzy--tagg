import Check from "./assets/Check";
const Pricing = () => {
  return (
    <section className="main-section">
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
              <Check />
              <span>Onsite Registration</span>
            </p>
            <p className="feature">
              <Check />
              <span>Digital Data Presentation</span>
            </p>
            <p className="feature">
              <Check />
              <span>Instant Participant Rating</span>
            </p>
            <p className="feature">
              <Check />
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
              <Check />
              <span>Onsite Registration</span>
            </p>
            <p className="feature">
              <Check />
              <span>Digital Data Presentation</span>
            </p>
            <p className="feature">
              <Check />
              <span>Instant Participant Rating</span>
            </p>
            <p className="feature">
              <Check />
              <span>Thank You SMS After Event</span>
            </p>
            <p className="feature">
              <Check />
              <span>Customized App for Registration</span>
            </p>
            <p className="feature">
              <Check />
              <span>Online Registration</span>
            </p>
            <p className="feature">
              <Check />
              <span>Data Hosting for 3 months</span>
            </p>
          </section>

          <button className="quote-btn">
            Order Now
            </button>
        </section>

        <section className="price">
          <h4>BUSINESS</h4>
            <section className="popular">Popular</section>
          <section className="price-text">
            GHS<span className="number">25</span> / head
            <div className="line"></div>
          </section>

          <section className="features">
            <h5 className="feature-text">Top Features:</h5>
            <p className="feature">
              <Check />
              <span>Onsite Registration</span>
            </p>
            <p className="feature">
              <Check />
              <span>Digital Data Presentation</span>
            </p>
            <p className="feature">
              <Check />
              <span>Instant Participant Rating</span>
            </p>
            <p className="feature">
              <Check />
              <span>Thank You SMS After Event</span>
            </p>
            <p className="feature">
              <Check />
              <span>Customized App for Registration</span>
            </p>
            <p className="feature">
              <Check />
              <span>Online Registration</span>
            </p>
            <p className="feature">
              <Check />
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
              <Check />
              <span>Onsite Registration</span>
            </p>
            <p className="feature">
              <Check />
              <span>Digital Data Presentation</span>
            </p>
            <p className="feature">
              <Check />
              <span>Instant Participant Rating</span>
            </p>
            <p className="feature">
              <Check />
              <span>Thank You SMS After Event</span>
            </p>
            <p className="feature">
              <Check />
              <span>Customized App for Registration</span>
            </p>
            <p className="feature">
              <Check />
              <span>Online Registration</span>
            </p>
            <p className="feature">
              <Check />
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
