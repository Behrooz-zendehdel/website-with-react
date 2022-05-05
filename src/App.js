import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Service from "./components/SectionServices/Service";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Service />
      <Experience />
      <Works />
    </div>
  );
}

export default App;
