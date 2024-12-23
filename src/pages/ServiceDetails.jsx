import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const service = useLoaderData();
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

  return (
    <div className="p-12 mt-12 max-w-5xl mx-auto rounded-md bg-blue-50">
      <Helmet>
        <title>Service Details | Skill Crafters</title>
      </Helmet>
      <div className="md:flex items-center gap-6">
        <div className="flex-1">
          <img
            src={serviceImage}
            className="w-full h-[400px] object-cover rounded-md"
            alt=""
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-500 mb-3">
            {serviceName}
          </h2>
          <p className="text-lg font-semibold">
            Price:{" "}
            <span className="font-medium text-base text-gray-600">
              ${price}/month
            </span>
          </p>
          <p className="text-lg font-semibold text-justify">
            Description:{" "}
            <span className="font-medium text-gray-600 text-base">
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
              <p className="text-gray-800 text-lg font-semibold">
                {providerName}
              </p>
              <p className="text-gray-700 font-medium text-base">
                Location:{" "}
                <span className="font-medium text-gray-600 text-sm">
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
  );
};

export default ServiceDetails;
