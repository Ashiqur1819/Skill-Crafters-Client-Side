import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const RecomendedServiceCard = ({ service }) => {
  const { _id, serviceImage, serviceName, price, description } = service;
  const { toggle } = useContext(AuthContext);
  return (
    <div
      className={`md:flex items-center gap-6 p-4 border rounded-md hover:shadow-lg hover:scale-105 transition-transform hover:duration-200 ease-in ${
        toggle ? "bg-white" : "bg-zinc-900 border border-gray-700"
      }`}
    >
      <div className="flex-1">
        <img
          src={serviceImage}
          className="w-full h-52 object-cover rounded-md"
          alt=""
        />
      </div>
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-teal-500 mb-2 mt-3 md:mt-0">
          {serviceName}
        </h2>
        <p
          className={`font-semibold text-lg ${
            toggle ? "text-gray-700" : "text-gray-200"
          }`}
        >
          Price:{" "}
          <span
            className={`font-normal text-base ${
              toggle ? "text-gray-500" : "text-gray-400"
            }`}
          >
            ${price}
          </span>
        </p>
        <p
          className={`font-semibold text-lg ${
            toggle ? "text-gray-700" : "text-gray-200"
          }`}
        >
          Description:{" "}
          <span
            className={`font-normal text-base ${
              toggle ? "text-gray-500" : "text-gray-400"
            }`}
          >
            {description.substring(0, 70)}
          </span>
        </p>
        <div className="card-actions justify-end items-end mt-3">
          <button className="py-2 w-full px-6 rounded-lg bg-gradient-to-r from-sky-500 to-sky-400 text-white cursor-pointer font-semibold hover:from-sky-400 hover:to-sky-500">
            <Link to={`/services/${_id}`}>View Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecomendedServiceCard;
