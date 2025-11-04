import React from 'react';
import Hero from './Hero/Hero';
import Research from './Research/Research';
import Philosophy from './Philosophy/Philosophy';

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Research />
      <Philosophy />
    </div>
  );
};

export default Home;