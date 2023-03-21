import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';


function App() {
  return (
    <Container>
      {/* Enrutamiento en react con ROUTER */}
      <Router>
        <Header />
        <Routes>
          {/* Esta es la ruta individual */}
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contacts" element={<Contact />}></Route>
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
