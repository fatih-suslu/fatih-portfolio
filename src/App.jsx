import "./App.css";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Seperator from "./components/Seperator";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Toast from "./components/Toast";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div>
          <Toast />
          <Navbar />
          <Hero />
          <Skills />
          <Seperator />
          <Profile />
          <Seperator />
          <Projects />
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
