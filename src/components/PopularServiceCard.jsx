import { Link } from "react-router-dom";
import { motion } from "motion/react"


const PopularServiceCard = ({service}) => {
    const {_id, serviceImage, serviceName, price, providerName, providerImage, description} = service
    return (
      <motion.div
        whileHover={{
          scale: 0.95,
          transition: { duration: 0.3 },
          ease: ["easeIn", "easeOut"],
        }}
        className="card bg-base-100 shadow-xl rounded-md"
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
          <h2 className="text-2xl text-sky-500 font-bold mt-3">
            {serviceName}
          </h2>
          <p className="font-semibold text-lg text-gray-700 mt-2">
            Price:{" "}
            <span className="font-normal text-base text-gray-500">
              ${price}/month
            </span>
          </p>
          <p className="font-semibold text-lg text-gray-700 leading-tight">
            Description:{" "}
            <span className="font-normal text-base text-gray-500">
              {description.substring(0, 100)}...
            </span>
          </p>
          <div className="flex items-center gap-3 mt-3">
            <span className="font-semibold text-lg text-gray-700">
              Provider:
            </span>
            <div className="flex items-center gap-2">
              <img src={providerImage} className="w-8 rounded-full" alt="" />
              <p className="text-indigo-500 font-semibold">{providerName}</p>
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