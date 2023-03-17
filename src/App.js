
import './App.css';
import Experience from './components/experience/Experience';
import Intro from './components/intro/Intro';
import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
import Services from './components/services/Services';
import Works from './components/works/Works';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Intro/>
    <Services/>
    <Experience/>
    <Works/>
    <Projects/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
