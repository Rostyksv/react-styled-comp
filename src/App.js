import React, { useState } from 'react';
import Hero from './components/Hero';
import Favorites from './components/Favorites';
import Featured from './components/Featured';
import Sweets from './components/Sweets';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Favorites />
      <Featured />
      <Sweets />
      <Footer />
    </Router>
  );
}

export default App;
