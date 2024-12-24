import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import AllServiceCard from "../components/AllServiceCard";

const AllServices = () => {

  const services = useLoaderData();
  const [searchItem, setSearchItem] = useState("");


  const filteredServices = services.filter((service) =>
    service.serviceName.toLowerCase().includes(searchItem.toLowerCase())
  );


  return (
    <div className="px-4 md:px-6 lg:px-8">
      <Helmet>
        <title>Services | Skill Crafters</title>
      </Helmet>
      <div className="mt-6">
        <label className="input input-bordered flex items-center gap-2">
          <input
            onChange={(e) => setSearchItem(e.target.value)}
            type="text"
            className="grow"
            placeholder="Search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-5 w-5 "
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {filteredServices.map((service) => (
          <AllServiceCard service={service} key={service._id}></AllServiceCard>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
