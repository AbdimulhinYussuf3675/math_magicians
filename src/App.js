import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './components/calculator';
import Nav from './components/Nav';
import Home from './components/Home';
import Quotes from './components/Quote';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quotes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
