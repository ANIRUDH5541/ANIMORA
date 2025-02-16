import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import OnePiece from './pages/OnePiece';
import Naruto from './pages/Naruto';
import KaijuNo8 from './pages/KaijuNo8';
import Bleach from './pages/Bleach';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/one-piece" element={<OnePiece />} />
          <Route path="/naruto" element={<Naruto />} />
          <Route path="/kaiju-no-8" element={<KaijuNo8 />} />
          <Route path="/bleach" element={<Bleach />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;