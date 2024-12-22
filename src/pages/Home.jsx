import React from 'react';
import Slider from '../components/Slider';
import PopularServices from '../components/PopularServices';

const Home = () => {
    return (
      <div>
        <div>
          <Slider></Slider>
        </div>
        <div className='mt-20 max-w-7xl mx-auto px:4 md:px-6 lg:px-8'>
          <PopularServices></PopularServices>
        </div>
      </div>
    );
};

export default Home;