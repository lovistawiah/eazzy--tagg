import person1 from './assets/person-1.jpeg'
import person2 from './assets/person-2.jpg'
import person3 from './assets/person-3.jpeg'
import person4 from './assets/person-4.jpeg'
const Team = () => {
  return (
    <section className="main-section">
      <h4 className="mini-header">Specialists behind great work</h4>
      <h1 className="header">Meet our Team</h1>
      <section className="desc-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
        voluptatum!
      </section>
      <section className="team">
        <section className="img">
          <img src={person1} alt="head of operations" />
        </section>
        <section className="team-info">
            <section className='name'>Perry E. Sarbah
            </section>
            <section className="position">
                Head of Operations
            </section>
        </section>
      </section>
      <section className="team">
        <section className="img">
          <img src={person2} alt="head of operations" />
        </section>
        <section className="team-info">
            <section className='name'>Edmund Adjetey
            </section>
            <section className="position">
               Technical Director
            </section>
        </section>
      </section>
      <section className="team">
        <section className="img">
          <img src={person3} alt="head of operations" />
        </section>
        <section className="team-info">
            <section className='name'>Theresa Osei
            </section>
            <section className="position">
               Administrator
            </section>
        </section>
      </section>
      <section className="team">
        <section className="img">
          <img src={person4} alt="head of operations" />
        </section>
        <section className="team-info">
            <section className='name'>Michael Oduro-Amoako
            </section>
            <section className="position">
               Technical Director
            </section>
        </section>
      </section>
    </section>
  );
};
export default Team;
