import SubIntro from "./SubIntro";
import "./App.css";
import Landing from "./Landing";

import Navigation from "./Navigation";
import AboutUs from "./AboutUs";
import Team from "./Team";
import Services from "./Services";
import Work from "./Work";
import Pricing from "./Pricing";
import Contact from "./Contact";

function App() {
  return (
    <>
      <Navigation />
      <Landing />
      <SubIntro />
      <AboutUs />
      <Team />
      <Services />
      <Work />
      <Pricing />
      <Contact />
    </>
  );
}

export default App;
