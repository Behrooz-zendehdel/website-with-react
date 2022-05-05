import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Service from "./components/SectionServices/Service";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Service />
    </div>
  );
}

export default App;
