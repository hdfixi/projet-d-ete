import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';
import Signin1 from './components/sigin/signin1';
import Signin2 from './components/sigin/signin2';
import Profile from './components/profil/profile';
import HouseList from './components/HouseList';

// import pages
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';


const App = () => {
  return (
    <div className='max-w-[1440px] mx-auto bg-white'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/HouseList' element={<HouseList />} />
        <Route path='/property/:id' element={<PropertyDetails />} />
        <Route  path="/About" element={<About />} />
        <Route  path="/Signin1" element={<Signin1 />} />
        <Route  path="/Signin2" element={<Signin2 />} />
        <Route  path="/Profile" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;