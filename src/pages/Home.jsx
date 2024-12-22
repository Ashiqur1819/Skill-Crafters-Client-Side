import React from 'react';
import Slider from '../components/Slider';
import PopularServices from '../components/PopularServices';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
      <div>
        <Helmet>
          <title>Home | Skill Crafters</title>
        </Helmet>
        <div>
          <Slider></Slider>
        </div>
        <div className="mt-20 max-w-7xl mx-auto px:4 md:px-6 lg:px-8">
          <PopularServices></PopularServices>
        </div>
      </div>
    );
};

export default Home;