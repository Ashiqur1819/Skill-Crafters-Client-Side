import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const PopularServiceCard = ({ service }) => {
  const { toggle } = useContext(AuthContext);
  const {
    _id,
    serviceImage,
    serviceName,
    price,
    providerName,
    providerImage,
    description,
  } = service;
  return (
    <motion.div
      whileHover={{
        scale: 0.97,
        transition: { duration: 0.2 },
        ease: ["easeIn", "easeOut"],
      }}
      className={`card shadow-xl rounded-md ${
        toggle ? "bg-white" : "bg-gray-800 border border-gray-700"
      }`}
    >
      <div className="p-3">
        <figure>
          <img
            src={serviceImage}
            referrerPolicy="no-referrer"
            className="h-40 w-full object-cover"
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
          <button className={`w-fit px-2 py-1 font-medium rounded-md cursor-pointer text-start border-b border-teal-500 hover:text-teal-500 ${toggle ? "text-gray-600" : "text-gray-300"}`}>
            <Link to={`/services/${_id}`}>View Details</Link>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PopularServiceCard;
