import React from 'react';
import AboutCard from './AboutCard';

const About = () => {
  return (
    <div className='pt-16 pb-16'>
        <h1 className='mt-6 text-2xl md:text-3xl capitalize font-bold text-center'>About Us</h1>
        <div className='mt-20 grid w-[90%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12'>
            {/* Dynamic reusable Card with passed props since evry card has a different image,title, and link*/}
            <div>
                <AboutCard image="/images/alike.png" title="A.L.I.K.E" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." linkText="Explore ALIKE" />
            </div>
            <div>
                <AboutCard image="/images/align.png" title="A.L.I.G.N" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." linkText="Explore ALIGN" />
            </div>
            <div>
                <AboutCard image="/images/auris.png" title="A.U.R.I.S" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." linkText="Explore AURIS" />
            </div>
            <div>
                <AboutCard image="/images/unite.png" title="U.N.I.T.E" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." linkText="Explore UNITE" />
            </div>
            <div>
                <AboutCard image="/images/mirror.png" title="The Mirror Institute" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." linkText="Explore The Mirror Institute" />
            </div>
        </div>
    </div>
  );
};

export default About;