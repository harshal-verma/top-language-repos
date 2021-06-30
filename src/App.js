import React , { useState , useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './App.css';
import Topics from './Topics';

const App = () => {
  return <React.Fragment>
     <Navbar />
     <Topics />
     <Footer />
  </React.Fragment>
}

export default App;
