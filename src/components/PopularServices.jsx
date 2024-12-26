import axios from "axios";
import { useContext, useEffect, useState } from "react";
import PopularServiceCard from "./PopularServiceCard";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const PopularServices = () => {
  const [services, setServices] = useState([]);
  const { toggle } = useContext(AuthContext);

  useEffect(() => {
    axios.get("http://localhost:3000/services").then((res) => {
      setServices(res.data);
    });
  }, []);

  return (
    <div className="px-4">
      <h2 className="text-3xl md:text-5xl text-teal-500 text-center font-bold mb-3">
        Popular Services
      </h2>
      <p
        className={`max-w-3xl mx-auto text-center  ${
          toggle ? "text-gray-600" : "text-gray-400"
        }`}
      >
        Explore our top-rated educational services, from personalized tutoring
        to skill-building workshops, designed to empower learners of all ages.
        Unlock your potential today!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {services.slice(0, 6).map((service) => (
          <PopularServiceCard
            service={service}
            key={service._id}
          ></PopularServiceCard>
        ))}
      </div>
      <div className="flex items-center justify-center mt-10">
        <button className="py-2 px-6 text-lg rounded-lg bg-gradient-to-r from-sky-500 to-sky-400 text-white cursor-pointer font-semibold hover:from-sky-400 hover:to-sky-500">
          <Link to="/all_services">Show All Services</Link>
        </button>
      </div>
    </div>
  );
};

export default PopularServices;
