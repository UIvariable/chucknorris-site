import React from 'react';

// Routing
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Home from './components/Home';
import AnimalJokes from './components/AnimalJokes';
import FoodJokes from './components/FoodJokes';
import ReligionJokes from './components/ReligionJokes';
import NotFound from './components/NotFound';

// Styles
import { GlobalStyles } from "./GlobalStyles";

const App = () => (
  <Router>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/animal' element={<AnimalJokes />} />
        <Route path='/food' element={<FoodJokes />} />
        <Route path='/religion' element={<ReligionJokes />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
 
      { <GlobalStyles /> }
  </Router>
  );

export default App;
