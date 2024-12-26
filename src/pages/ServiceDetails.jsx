import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import useAxios from "../hooks/useAxios";

const ServiceDetails = () => {
  const [service, setService] = useState([]);
  const { id } = useParams();
  const axiosSecure = useAxios();

  useEffect(() => {
    axiosSecure.get(`/services/${id}`).then((res) => {
      setService(res.data);
    });
  }, [id, setService]);

  const {
    _id,
    serviceImage,
    serviceName,
    price,
    providerName,
    providerImage,
    serviceArea,
    description,
  } = service;
  const { toggle } = useContext(AuthContext);

  return (
    <div className="px-4">
      <div
        className={`p-6 md:p-12 mt-12 max-w-5xl mx-auto rounded-md ${
          toggle ? "bg-blue-50" : "bg-zinc-950 border border-gray-700"
        }`}
      >
        <Helmet>
          <title>Service Details | Skill Crafters</title>
        </Helmet>
        <div className="md:flex items-center gap-6">
          <div className="flex-1">
            <img
              src={serviceImage}
              referrerPolicy="no-referrer"
              className="w-full h-[400px] object-cover rounded-md"
              alt=""
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-500 mb-3 mt-3 md:mt-0">
              {serviceName}
            </h2>
            <p
              className={`text-lg font-semibold ${
                toggle ? "text-gray-800" : "text-gray-300"
              }`}
            >
              Price:{" "}
              <span className="font-medium text-base text-gray-500">
                ${price}/month
              </span>
            </p>
            <p
              className={`text-lg font-semibold ${
                toggle ? "text-gray-800" : "text-gray-300"
              }`}
            >
              Description:{" "}
              <span className="font-medium text-gray-500 text-base">
                {description}
              </span>
            </p>
            <div className="flex items-center mt-6">
              <img
                src={providerImage}
                alt={providerName}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <p
                  className={`text-lg font-semibold ${
                    toggle ? "text-gray-800" : "text-gray-300"
                  }`}
                >
                  {providerName}
                </p>
                <p
                  className={`text-base font-semibold ${
                    toggle ? "text-gray-800" : "text-gray-300"
                  }`}
                >
                  Location:{" "}
                  <span className="font-medium text-gray-500 text-sm">
                    {serviceArea}
                  </span>
                </p>
              </div>
            </div>
            <div className="mt-6">
              <button className="py-2 w-full px-6 text-lg rounded-lg bg-gradient-to-r from-sky-500 to-sky-400 text-white cursor-pointer font-semibold hover:from-sky-400 hover:to-sky-500">
                <Link to={`/book_now/${_id}`}>Book Now</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
