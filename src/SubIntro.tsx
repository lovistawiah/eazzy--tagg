import Rocket from "./assets/Rocket";
import Value from "./assets/Value";
import Vision from "./assets/Vision";

const SubIntro = () => {
  return (
    <div className="missions">
      <section className="mission">
        <section className="icon-text">
          <Rocket /> <span>Mission</span>
        </section>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
          iste. Quisquam minima mollitia voluptates molestiae natus at quasi
          quaerat cumque nobis, autem reiciendis ab reprehenderit veritatis sunt
          exercitationem ea modi?
        </p>
      </section>
      <section className="mission">
        <section className="icon-text">
          <Vision /> <span>Vision</span>
        </section>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
          iste. Quisquam minima mollitia voluptates molestiae natus at quasi
          quaerat cumque nobis, autem reiciendis ab reprehenderit veritatis sunt
          exercitationem ea modi?
        </p>
      </section>
      <section className="mission">
        <section className="icon-text">
          <Value /> <span>Value</span>
        </section>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
          iste. Quisquam minima mollitia voluptates molestiae natus at quasi
          quaerat cumque nobis, autem reiciendis ab reprehenderit veritatis sunt
          exercitationem ea modi?
        </p>
      </section>
    </div>
  );
};
export default SubIntro;
