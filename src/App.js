import { Container } from 'react-bootstrap';
import { HashRouter, Route, Routes } from 'react-router-dom';

import './assets/css/App.css';
import Home from './components/Home';
import Works from './components/Works';
import About from './components/About';
import Contact from './components/Contact';
import FFXIVProfit from './components/works/FFXIVProfit';
import ZDuBois from './components/works/ZDuBois';

function App() {
  return (
    <HashRouter>
      <Container fluid>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/works/ffxiv-profit" element={<FFXIVProfit />} />
          <Route path="/works/zdubois" element={<ZDuBois />} />
        </Routes>
      </Container>
    </HashRouter>
  );
}

export default App;
