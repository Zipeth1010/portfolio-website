import "./App.css";
import AboutComponent from "./Components/About";
import ContactComponent from "./Components/Contact";
import NavBar from "./Components/NavBar";
import ProjectsComponent from "./Components/Projects";
import TechStackComponent from "./Components/TechStack";
import LinksComponent from "./Components/Links";
import DoingNow from "./Components/DoingNow";

function App() {
  return (
    <div className="App">
      <NavBar />
      <AboutComponent />
      <DoingNow />
      <ProjectsComponent />
      <TechStackComponent />
      <LinksComponent />
      <ContactComponent />
    </div>
  );
}

export default App;
