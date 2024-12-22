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
    <div className="px-4 md:px-6 lg:px-8">
      <Helmet>
        <title>Service Details | Skill Crafters</title>
      </Helmet>
      <div>
        <button className="py-2 px-6 text-lg rounded-lg bg-gradient-to-r from-sky-500 to-sky-400 text-white cursor-pointer font-semibold hover:from-sky-400 hover:to-sky-500">
          <Link to={`/book_now/${_id}`}>Book Now</Link>
        </button>
      </div>
    </div>
  );
};

export default ServiceDetails;
