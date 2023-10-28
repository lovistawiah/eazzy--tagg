import creativity from "./assets/creativity.svg";
import speed from './assets/speed.svg'
import star from './assets/star.svg'
const About = () => {
  return (
    <section className="about-us">
      <section className="header-text">
        <h4>About Us</h4>
        <section>
          We are an event registration company founded on the principles out of
          the box-thinking for the digital
        </section>
      </section>
      <section className="holder">
        <section className="value">
          <section className="img-holder">
            <img src={creativity} alt="creativity" />
          </section>
          <h3 className="value-header">Creative</h3>
          <section className="value-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            accusantium autem, optio ipsa quia repellat ipsam excepturi, iusto
            facere numquam sequi doloremque blanditiis, nulla iste porro odit
            nobis delectus aliquid!
          </section>
        </section>
        <section className="value">
          <section className="img-holder">
            <img src={speed} alt="creativity" />
          </section>
          <h3 className="value-header">Speedy</h3>
          <section className="value-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            accusantium autem, optio ipsa quia repellat ipsam excepturi, iusto
            facere numquam sequi doloremque blanditiis, nulla iste porro odit
            nobis delectus aliquid!
          </section>
        </section>
        <section className="value">
          <section className="img-holder">
            <img src={star} alt="creativity" />
          </section>
          <h3 className="value-header">Quality</h3>
          <section className="value-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            accusantium autem, optio ipsa quia repellat ipsam excepturi, iusto
            facere numquam sequi doloremque blanditiis, nulla iste porro odit
            nobis delectus aliquid!
          </section>
        </section>
      </section>
    </section>
  );
};
export default About;
