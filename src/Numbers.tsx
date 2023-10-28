import numbersImg from './assets/numbers-bg.jpg'
const Numbers = () => {
  return (
  <div className="numbers">
    <img src={numbersImg} alt="" />
    <ul className='number-text'>
        <li>
            <section>
                <h4>100+</h4>
                <p>successful events</p>
            </section>
        </li>
        <li>
            <section>
                <h4>80+</h4>
                <p>happy clients</p>
            </section>
        </li>
        <li>
            <section>
                <h4>30+</h4>
                <p>registered booths</p>
            </section>
        </li>
        <li>
            <section>
                <h4>10K+</h4>
                <p>registered participants</p>
            </section>
        </li>
    </ul>
  </div>
  );
};
export default Numbers;
