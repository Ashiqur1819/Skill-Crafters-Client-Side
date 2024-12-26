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
        scale: 0.95,
        transition: { duration: 0.3 },
        ease: ["easeIn", "easeOut"],
      }}
      className={`card shadow-xl rounded-md ${
        toggle ? "bg-white" : "bg-zinc-900 border border-gray-700"
      }`}
    >
      <div className="p-6">
        <figure>
          <img
            src={serviceImage}
            referrerPolicy="no-referrer"
            className="h-60 w-full object-cover rounded-md"
            alt="Shoes"
          />
        </figure>
        <h2 className="text-2xl text-sky-500 font-bold mt-3">{serviceName}</h2>
        <p
          className={`font-semibold text-lg mt-2 ${
            toggle ? "text-gray-700" : "text-gray-200"
          }`}
        >
          Price:{" "}
          <span
            className={`font-normal text-base ${
              toggle ? "text-gray-500" : "text-gray-400"
            }`}
          >
            ${price}/month
          </span>
        </p>
        <p
          className={`font-semibold text-lg leading-tight ${
            toggle ? "text-gray-700" : "text-gray-200"
          }`}
        >
          Description:{" "}
          <span
            className={`font-normal text-base ${
              toggle ? "text-gray-500" : "text-gray-400"
            }`}
          >
            {description.substring(0, 100)}...
          </span>
        </p>
        <div className="flex items-center gap-3 mt-3">
          <span
            className={`font-semibold text-lg ${
              toggle ? "text-gray-700" : "text-gray-200"
            }`}
          >
            Provider:
          </span>
          <div className="flex items-center gap-2">
            <img src={providerImage} className="w-8 rounded-full" alt="" />
            <p className="text-indigo-400 font-semibold">{providerName}</p>
          </div>
        </div>
        <div className="card-actions justify-end items-end mt-6">
          <button className="py-2 w-full px-6 text-lg rounded-lg bg-gradient-to-r from-teal-500 to-teal-400 text-white cursor-pointer font-semibold hover:from-teal-400 hover:to-teal-500">
            <Link to={`/services/${_id}`}>View Details</Link>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PopularServiceCard;
