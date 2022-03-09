import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Timeline from './components/Timeline';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About />
      <Services />
      <Projects/>
      <Skills />
      <Timeline />
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
