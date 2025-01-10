import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const AllServiceCard = ({ service }) => {
  const {
    _id,
    serviceImage,
    serviceName,
    price,
    serviceArea,
    providerName,
    providerImage,
    description,
  } = service;
  const { toggle } = useContext(AuthContext);
  return (
    <div
      className={`card bg-base-100 border shadow-md rounded-md hover:-translate-y-3 duration-200 ${
        toggle ? "bg-white" : "bg-zinc-900 border border-gray-700"
      }`}
    >
      <div className="p-3">
        <figure>
          <img
            src={serviceImage}
            referrerPolicy="no-referrer"
            className="h-40 w-full rounded-md object-cover"
            alt="Shoes"
          />
        </figure>
        <h2 className="text-2xl text-sky-500 font-bold mt-1">{serviceName}</h2>
        <p
          className={`font-semibold text-lg  ${
            toggle ? "text-gray-700" : "text-gray-200"
          }`}
        >
          ${price}
          <span
            className={`font-normal text-base ${
              toggle ? "text-gray-500" : "text-gray-400"
            }`}
          >
            /month
          </span>
        </p>
        <p
          className={`font-medium text-base ${
            toggle ? "text-gray-600" : "text-gray-300"
          }`}
        >
          {serviceArea}
        </p>
        <p
          className={`font-normal text-base ${
            toggle ? "text-gray-500" : "text-gray-400"
          }`}
        >
          {description.substring(0, 60)}...
        </p>
        <div className="flex items-center gap-3 mt-1">
          <div className="flex items-center gap-2">
            <img
              src={providerImage}
              className="w-8 rounded-full"
              referrerPolicy="no-referrer"
              alt=""
            />
            <p className="text-indigo-400 font-semibold">{providerName}</p>
          </div>
        </div>
        <div className="card-actions mt-6">
          <button
            className={`w-fit px-2 py-1 font-medium rounded-lg cursor-pointer text-start border-b border-teal-500 hover:text-teal-500 ${
              toggle ? "text-gray-600" : "text-gray-300"
            }`}
          >
            <Link to={`/services/${_id}`}>View Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllServiceCard;
