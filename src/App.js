import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';

function App() {
  document.body.style.backgroundColor = '#2d2d30';

  return (
    <div className="App">
      <Nav />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
