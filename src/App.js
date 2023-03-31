import { Container } from 'react-bootstrap';
import { HashRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import Works from './components/Works';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <HashRouter>
      <Container fluid>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </HashRouter>
  );
}

export default App;
