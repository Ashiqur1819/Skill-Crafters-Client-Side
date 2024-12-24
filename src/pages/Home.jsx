import React from 'react';
import Slider from '../components/Slider';
import PopularServices from '../components/PopularServices';
import { Helmet } from 'react-helmet-async';
import ChooseUs from '../components/ChooseUs';
import RecomendedServices from '../components/RecomendedServices';

const Home = () => {
    return (
      <div>
        <Helmet>
          <title>Home | Skill Crafters</title>
        </Helmet>
        <div>
          <Slider></Slider>
        </div>
        <div className="max-w-7xl mx-auto px:4 md:px-6 lg:px-8">
          <div className="mt-20 ">
            <PopularServices></PopularServices>
          </div>
          <div className='mt-20'>
            <RecomendedServices></RecomendedServices>
          </div>
          <div className="mt-20">
            <ChooseUs></ChooseUs>
          </div>
        </div>
      </div>
    );
};

export default Home;