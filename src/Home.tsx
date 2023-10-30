import AboutUs from "./AboutUs";
import Contact from "./Contact";
import Footer from "./Footer";
import Landing from "./Landing";
import Navigation from "./Navigation";
import Pricing from "./Pricing";
import Services from "./Services";
import SubIntro from "./SubIntro";
import Team from "./Team";
import Work from "./Work";

const Home = () => {
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
      <Footer />
    </>
  );
}
export default Home