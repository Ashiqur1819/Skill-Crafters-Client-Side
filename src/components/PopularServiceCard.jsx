import { Link } from "react-router-dom";


const PopularServiceCard = ({service}) => {
    const {_id, serviceImage, serviceName, price, providerName, providerImage, description} = service
    return (
      <div className="card bg-base-100 shadow-xl rounded-md">
        <div className="p-6">
          <figure>
            <img
              src={serviceImage}
              className="h-60 w-full object-cover rounded-md"
              alt="Shoes"
            />
          </figure>
          <h2 className="text-2xl text-sky-500 font-bold mt-3">
            {serviceName}
          </h2>
          <p className="font-semibold text-lg text-gray-700 mt-2">
            Price: <span className="font-normal text-base">{price}</span>
          </p>
          <p className="font-semibold text-lg text-gray-700">
            Description:{" "}
            <span className="font-normal text-base">
              {description.substring(0, 100)}
            </span>
          </p>
          <div className="flex items-center gap-6 mt-2">
            <span className="font-semibold text-lg text-gray-700">
              Provider:
            </span>
            <div className="flex items-center gap-3">
              <img src={providerImage} className="w-8" alt="" />
              <p className="text-indigo-500 font-semibold">{providerName}</p>
            </div>
          </div>
          <div className="card-actions justify-end items-end mt-6">
            <button className="py-2 w-full px-6 text-lg rounded-lg bg-gradient-to-r from-teal-500 to-teal-400 text-white cursor-pointer font-semibold hover:from-teal-400 hover:to-teal-500">
              <Link to={`/services/${_id}`}>View Details</Link>
            </button>
          </div>
        </div>
      </div>
    );
};

export default PopularServiceCard;