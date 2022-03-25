import './App.scss';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import AboutMe from './components/About me/Aboutme';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import { useContext } from 'react';
import { ThemeContext } from './context/themeContext';

function App() {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <div className="App" data-theme={darkTheme ? "dark" : ""} >
      <Header />
      <Welcome />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
