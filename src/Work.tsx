const Work = () => {
  return (
    <section className="main-section">
      <h4 className="mini-header">some of the project by us</h4>
      <h1 className="header">Our Works</h1>
      <section className="desc-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, culpa!
      </section>
      <section className="container">
        <div className="slider-wrapper">
          <div className="slider">
            <img
              src="https://images.unsplash.com/photo-1632395627732-005012dbc286?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBsYW5ldHxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
              id="slider-1"
            />
            <img
              src="https://images.unsplash.com/photo-1630839437035-dac17da580d0?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBsYW5ldHxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
              id="slider-2"
            />
            <img
              src="https://images.unsplash.com/photo-1634176866089-b633f4aec882?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBsYW5ldHxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
              id="slider-3"
            />
          </div>
          <div className="slider-nav">
            <a href="#slider-1"></a>
            <a href="#slider-2"></a>
            <a href="#slider-3"></a>
          </div>
        </div>
      </section>
    </section>
  );
};
export default Work;
