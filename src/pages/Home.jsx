import React, { useContext } from "react";
import Slider from "../components/Slider";
import PopularServices from "../components/PopularServices";
import { Helmet } from "react-helmet-async";
import ChooseUs from "../components/ChooseUs";
import RecomendedServices from "../components/RecomendedServices";
import { AuthContext } from "../provider/AuthProvider";
import FAQ from "../components/FAQ";

const Home = () => {
  const { toggle } = useContext(AuthContext);

  return (
    <div className={`${toggle ? "bg-white" : "bg-gray-800"}`}>
      <Helmet>
        <title>Home | Skill Crafters</title>
      </Helmet>
      <div>
        <Slider></Slider>
      </div>
      <div className="max-w-7xl mx-auto md:px-6 lg:px-8">
        <div className="mt-20 ">
          <PopularServices></PopularServices>
        </div>
        <div className="mt-20">
          <RecomendedServices></RecomendedServices>
        </div>
        <div className="mt-20">
          <ChooseUs></ChooseUs>
        </div>
        <div className="mt-20">
         <FAQ></FAQ>
        </div>
      </div>
    </div>
  );
};

export default Home;
