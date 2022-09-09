import React from 'react';

// import components
import HouseList from '../components/HouseList';
import Banner from '../components/Banner';
import About from '../components/About';



const Home = () => {
  return (
    <div className='min-h-[1800px]'>
      <Banner />
      <HouseList />
      <About />
    </div>
  );
};

export default Home;