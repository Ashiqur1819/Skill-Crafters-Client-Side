import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";

const BookedServices = () => {
  const {user} = useContext(AuthContext);
  const {toggle} = useContext(AuthContext)
  const [bookedServices, setBookServices] = useState([])
  useEffect(() => {
    axios
      .get(`http://localhost:3000/booked_services/${user?.email}`)
      .then((res) => {
        setBookServices(res.data);
      });
  },[setBookServices])

  return (
    <div className="px-4 md:px-6 lg:px-8 mt-12">
      <Helmet>
        <title>Booked Services | Skill Crafters</title>
      </Helmet>
      <div>
        <h2
          className={`text-3xl font-bold mb-6 ${
            toggle ? "text-black" : "text-gray-200"
          }`}
        >
          My Booked Services
        </h2>
        <div className="overflow-x-auto">
          {!bookedServices.length == 0 ? (
            <table className="table">
              <thead>
                <tr className="text-lg text-sky-500">
                  <th className="font-semibold">Service Image</th>
                  <th className="font-semibold">Service Name</th>
                  <th className="font-semibold">Location</th>
                  <th className="font-semibold">Price</th>
                  <th className="font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {bookedServices.map((service, index) => (
                  <tr key={index}>
                    <td>
                      <img
                        src={service.serviceImage}
                        className="w-12 h-12 object-cover rounded-full"
                        alt=""
                      />
                    </td>
                    <td className="text-base text-gray-500 font-medium">
                      {service.serviceName}
                    </td>
                    <td className="text-base text-gray-500 font-medium">
                      {service.serviceArea}
                    </td>
                    <td className="text-base text-gray-500 font-medium">
                      ${service.price}
                    </td>
                    <td className={`text-base text-white font-medium`}>
                      <p
                        className={`${
                          service.serviceStatus === "Pending" && "bg-red-500"
                        } ${
                          service.serviceStatus === "Working" && "bg-yellow-400"
                        } ${
                          service.serviceStatus === "Completed" &&
                          "bg-green-400"
                        } text-center py-1 px-2 rounded-md`}
                      >
                        {service.serviceStatus}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div
              className={`h-96 flex flex-col items-center justify-center text-center rounded-md ${toggle ? "bg-blue-50" : "bg-gray-800"}`}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-sky-500">
                No Services Booked Yet
              </h2>
              <p className="text-gray-400 mt-6">
                It seems like you haven’t booked any services. <br />
                Start exploring and make your first booking today!
              </p>
              <div className="flex items-center justify-center mt-10">
                <button className="py-2 px-6 text-lg rounded-lg bg-gradient-to-r from-teal-500 to-teal-400 text-white cursor-pointer font-semibold hover:from-teal-400 hover:to-teal-500">
                  <Link to="/all_services">Back To All Services</Link>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookedServices;
