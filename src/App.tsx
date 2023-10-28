import About from "./About";
import "./App.css";
import Clients from "./Clients";
import Landing from "./Landing";
import Navigation from "./Navigation";
import Numbers from "./Numbers";
import Services from "./Services";

function App() {
  return (
    <>
      <Navigation />
      <Landing />
      <Services />
      <Clients />
      <About />
      <Numbers />
    </>
  );
}

export default App;
