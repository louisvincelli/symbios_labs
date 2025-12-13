import React from 'react';
import Hero from './Hero/Hero';
import Research from './Research/Research';
import Philosophy from './Philosophy/Philosophy';
import Projects from './Projects/Projects';
import Publications from './Publications/Publications';

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Research />
      <Philosophy />
      <Projects />
      <Publications />
    </div>
  );
};

export default Home;