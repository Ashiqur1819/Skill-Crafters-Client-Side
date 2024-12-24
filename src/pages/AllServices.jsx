import React from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import AllServiceCard from "../components/AllServiceCard";

const AllServices = () => {

  const services = useLoaderData();

  return (
    <div className="px-4 md:px-6 lg:px-8">
      <Helmet>
        <title>Services | Skill Crafters</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {services.map((service) => (
          <AllServiceCard service={service} key={service._id}></AllServiceCard>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
