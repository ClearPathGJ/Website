import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './pages/Services';
import About from './pages/About';
import Classes from './pages/Classes';
import Blog from './pages/Blog';
import Members from './pages/Members';
import Contact from './components/Footer';
import Popup from './components/Popup';

const App = () => {
  return (
    <div className="App">
      <Popup />
      <Header />
      <Hero />
      <Routes>
        <Route path="/" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/members" element={<Members />} />
      </Routes>
      <Contact />
    </div>
  );
};

export default App;
