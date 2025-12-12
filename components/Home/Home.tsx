import React from 'react';
import Hero from './Hero/Hero';
import Research from './Research/Research';
import Philosophy from './Philosophy/Philosophy';
import Projects from './Projects/Projects';

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Research />
      <Philosophy />
      <Projects />
    </div>
  );
};

export default Home;