import "./App.css";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Seperator from "./components/Seperator";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Skills />
      <Seperator />
      <Profile />
      <Seperator />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
