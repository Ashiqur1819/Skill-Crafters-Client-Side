import { Link } from "react-router-dom";


const RecomendedServiceCard = ({service}) => {
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
    return (
      <div className="flex items-center gap-6 border p-4 rounded-md">
        <div className="flex-1">
          <img src={serviceImage} className="w-full h-52 object-cover rounded-md" alt="" />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-teal-500 mb-2">{serviceName}</h2>
          <p className="text-lg font-semibold text-gray-700">Price: <span className="text-base font-medium text-gray-600">${price}</span></p>
          <p className="text-lg font-semibold text-gray-700">Description: <span className="text-base font-normal text-gray-600">{description.substring(0, 70)}</span></p>
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