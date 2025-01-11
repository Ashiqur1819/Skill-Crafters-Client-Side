import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import AllServiceCard from "../components/AllServiceCard";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";

const AllServices = () => {
  const [services, setServices] = useState([]);
  const { toggle } = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const filteredServices = services.filter((service) =>
    service.serviceName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const sortedServices = [...filteredServices].sort((a, b) =>{
    if (sortOrder === "asc") {
      return a.serviceName.toLowerCase() > b.serviceName.toLowerCase() ? 1 : -1;
    } else {
      return a.serviceName.toLowerCase() < b.serviceName.toLowerCase() ? 1 : -1; 
    }
  });

  useEffect(() => {
    axios
      .get(`https://skill-crafters-server-side.vercel.app/all-services`)
      .then((res) => {
        setServices(res.data);
      });
  }, []);

  return (
    <div className="px-4 md:px-6 lg:px-8">
      <Helmet>
        <title>Services | Skill Crafters</title>
      </Helmet>
      <div className="md:flex items-center justify-end gap-6 mt-6">
        <label
          className={`input mt-3 input-bordered focus:border  flex items-center gap-2 rounded-md text-white  ${
            !toggle
              ? "bg-gray-900 border border-gray-600 "
              : "bg-white border border-gray-300 text-gray-600"
          }`}
        >
          <input
            type="text"
            placeholder="Search by Title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`grow ${toggle ? "text-gray-400" : "text-gray-600"}`}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className={`h-6 w-6 text-gray-500`}
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <label
          className={`form-control mt-3 rounded-lg ${
            !toggle ? "border border-gray-500" : "border border-gray-100"
          }`}
        >
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className={`select select-bordered text-gray-400 text-base ${
              !toggle ? "bg-gray-900" : "bg-white text-gray-600"
            }`}
          >
            <option value={"asc"}>Ascending Order</option>
            <option value={"dsc"}>Descending Order</option>
          </select>
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-12">
        {sortedServices.map((service) => (
          <AllServiceCard service={service} key={service._id}></AllServiceCard>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
