import "./App.css";
import AboutComponent from "./Components/About";
import ContactComponent from "./Components/Contact";
import NavBar from "./Components/NavBar";
import ProjectsComponent from "./Components/Projects";
import TechStackComponent from "./Components/TechStack";
import LinksComponent from "./Components/Links";

function App() {
  return (
    <div className="App">
      <NavBar />
      <AboutComponent />
      <ProjectsComponent />
      <TechStackComponent />
      <LinksComponent />
      <ContactComponent />
    </div>
  );
}

export default App;
