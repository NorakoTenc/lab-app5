import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Product from './Product';
import Header from './Header';
import Footer from './Footer';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
