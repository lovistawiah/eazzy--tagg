import { faChartLine, faChartPie, faRocket } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SubIntro = () => {
  return (
    <div className="agendas">
      <section className="agenda">
        <section className="icon-text">
          <FontAwesomeIcon icon={faRocket}/> <span>Mission</span>
        </section>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
          iste. Quisquam minima mollitia voluptates molestiae natus at quasi
          quaerat cumque nobis, autem reiciendis ab reprehenderit veritatis sunt
          exercitationem ea modi?
        </p>
      </section>

      <section className="agenda">
        <section className="icon-text">
          <FontAwesomeIcon icon={faChartLine} /> <span>Vision</span>
        </section>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
          iste. Quisquam minima mollitia voluptates molestiae natus at quasi
          quaerat cumque nobis, autem reiciendis ab reprehenderit veritatis sunt
          exercitationem ea modi?
        </p>
      </section>

      <section className="agenda">
        <section className="icon-text">
          <FontAwesomeIcon icon={faChartPie} /> <span>Value</span>
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
