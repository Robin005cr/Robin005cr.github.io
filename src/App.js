import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Bugs from './pages/Bugs';
import ProfessionalExperience from './pages/ProfessionalExperience';
import Challenges from './pages/Challenges';
import Shortcuts from './pages/Shortcuts';
import Trainings from './pages/Trainings';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="l-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bugs" element={<Bugs />} />
            <Route path="/prof_exp" element={<ProfessionalExperience />} />
            <Route path="/challenges" element={<Challenges />} />
            <Route path="/shortcuts" element={<Shortcuts />} />
            <Route path="/trainings" element={<Certifications />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

