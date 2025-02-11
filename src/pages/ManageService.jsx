import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { GoTrash } from "react-icons/go";
import Swal from "sweetalert2";
import useAxios from "../hooks/useAxios";

const ManageService = () => {
  const { user } = useContext(AuthContext);
  const [services, setServices] = useState([]);
  const { toggle } = useContext(AuthContext);
  const axiosSecure = useAxios();

  useEffect(() => {
    axiosSecure.get(`/service/${user?.email}`)
    .then((res) => {
      setServices(res.data);
    });
  }, []);

  const handleDeleteService = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#20a7db",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/services/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your service has been deleted.",
                icon: "success",
              });

              const remaining = services.filter(
                (service) => service._id !== id
              );
              setServices(remaining);
            }
          });
      }
    });
  };

  return (
    <div
      className={`px-4 md:px-6 lg:px-8 mt-12 ${
        toggle ? "bg-white" : "bg-zinc-950"
      }`}
    >
      <Helmet>
        <title>Manage Service | Skill Crafters</title>
      </Helmet>
      <div>
        <div className="overflow-x-auto">
          <h2
            className={`text-3xl font-bold mb-6 ${
              toggle ? "text-teal-500" : "text-teal-500"
            }`}
          >
            My Added Services
          </h2>
          {!services.length == 0 ? (
            <table className="table">
              <thead>
                <tr className="text-lg text-sky-500">
                  <th className="font-semibold">Service Image</th>
                  <th className="font-semibold">Service Name</th>
                  <th className="font-semibold">Location</th>
                  <th className="font-semibold">Price</th>
                  <th className="font-semibold">Action</th>
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
                    <td className="text-base text-gray-400 font-medium">
                      {service.serviceName}
                    </td>
                    <td className="text-base text-gray-400 font-medium">
                      {service.serviceArea}
                    </td>
                    <td className="text-base text-gray-400 font-medium">
                      ${service.price}
                    </td>
                    <td className="flex items-center justify-start gap-6 text-xl mt-1">
                      <button className="bg-teal-500 px-3 py-2 text-white rounded-md">
                        <Link to={`/update_service/${service._id}`}>
                          <FaRegEdit></FaRegEdit>
                        </Link>
                      </button>
                      <button
                        onClick={() => handleDeleteService(service._id)}
                        className="bg-red-500 px-3 py-2 text-white rounded-md"
                      >
                        <GoTrash></GoTrash>
                      </button>
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
                You Haven't Added Any Services Yet!
              </h2>
              <p className="text-gray-400 mt-6">
                Get started by adding your first service to showcase your
                offerings!
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

export default ManageService;
