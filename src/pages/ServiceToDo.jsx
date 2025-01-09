import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";


const ServiceToDo = () => {

  const [services, setServices] = useState();
  const {user, toggle} = useContext(AuthContext)

  useEffect( () => {

    const fetchData = async () => {
  const response = await axios.get(
    `http://localhost:3000/booked-services/${user.email}`
  );
        setServices(response.data)
    }
    fetchData()
  }, [setServices, user]);

  
   return (
    <div className="px-4 md:px-6 lg:px-8 mt-12">
      <Helmet>
        <title>Service To-Do | Skill Crafters</title>
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
          {!services?.length == 0 ? (
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
                {services.map((service, index) => (
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
                    <td className={`text-base font-medium`}>
                      <p>
                        <select onChange={(e) => handleStatusChange(service._id, service.serviceStatus, e.target.value)} className="select select-bordered max-w-xs">
                          <option defaultValue={service.serviceStatus}>
                            Pending
                          </option>
                          <option>Working</option>
                          <option>Completed</option>
                        </select>
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div
              className={`h-96 flex flex-col items-center justify-center text-center rounded-md ${
                toggle ? "bg-blue-50" : "bg-gray-800"
              }`}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-sky-500">
                No One Booked Your Service Yet
              </h2>
              <p className="text-gray-400 mt-6">
                Tips to Attract Customers and Kickstart Your Success
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

  


 


export default ServiceToDo;
