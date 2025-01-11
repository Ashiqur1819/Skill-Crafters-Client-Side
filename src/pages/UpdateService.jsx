import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAxios from "../hooks/useAxios";
import { AuthContext } from "../provider/AuthProvider";

const UpdateService = () => {
  const navigate = useNavigate();
  const {toggle} = useContext(AuthContext)

  const [service, setService] = useState([]);
  const { id } = useParams();
  const axiosSecure = useAxios();

  useEffect(() => {
    axiosSecure.get(`/services/${id}`).then((res) => {
      setService(res.data);
    });
  }, [id, setService]);

  const { _id, serviceImage, serviceName, price, serviceArea, description } =
    service;

  const handleUpdateService = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedService = Object.fromEntries(formData.entries());

    //  Send data from client side to server side
    axios
      .put(`https://skill-crafters-server-side.vercel.app/services/${_id}`, updatedService)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Congratulations",
            text: `${service.serviceName} successfully updated`,
          });
        }
        navigate("/manage_service");
      });
  };

  return (
    <div className="px-4">
      <div
        className={`card w-full mx-auto max-w-2xl shrink-0 shadow-2xl mt-12 rounded-md ${
          toggle ? "bg-white " : "bg-zinc-900 border border-gray-600"
        }`}
      >
        <form onSubmit={handleUpdateService} className="card-body">
          <h2 className="text-4xl font-bold text-sky-500 text-center">
            Update A Service
          </h2>
          <div className="divider my-2"></div>
          <div className="form-control">
            <label className="label">
              <span
                className={`label-text text-base font-medium ${
                  toggle ? "text-gray-800" : "text-gray-300"
                }`}
              >
                Service Image URL:
              </span>
            </label>
            <input
              type="url"
              name="serviceImage"
              defaultValue={serviceImage}
              placeholder="Service image url"
               className={`input input-bordered ${
                toggle ? "bg-white text-gray-600" : "bg-gray-800 text-gray-400"
              }`}
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className={`label-text text-base font-medium ${
                  toggle ? "text-gray-800" : "text-gray-300"
                }`}>
                Service Name:
              </span>
            </label>
            <input
              type="text"
              name="serviceName"
              defaultValue={serviceName}
              placeholder="Service name"
               className={`input input-bordered ${
                toggle ? "bg-white text-gray-600" : "bg-gray-800 text-gray-400"
              }`}
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className={`label-text text-base font-medium ${
                  toggle ? "text-gray-800" : "text-gray-300"
                }`}>
                Service Price:
              </span>
            </label>
            <input
              type="number"
              name="price"
              defaultValue={price}
              placeholder="Service price"
               className={`input input-bordered ${
                toggle ? "bg-white text-gray-600" : "bg-gray-800 text-gray-400"
              }`}
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className={`label-text text-base font-medium ${
                  toggle ? "text-gray-800" : "text-gray-300"
                }`}>
                Service Area:
              </span>
            </label>
            <input
              type="text"
              name="serviceArea"
              defaultValue={serviceArea}
              placeholder="Service area"
               className={`input input-bordered ${
                toggle ? "bg-white text-gray-600" : "bg-gray-800 text-gray-400"
              }`}
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className={`label-text text-base font-medium ${
                  toggle ? "text-gray-800" : "text-gray-300"
                }`}>
                Description:
              </span>
            </label>
            <input
              type="text"
              name="description"
              defaultValue={description}
              placeholder="Description"
               className={`input input-bordered ${
                toggle ? "bg-white text-gray-600" : "bg-gray-800 text-gray-400"
              }`}
            />
          </div>
          <div className="form-control mt-4">
            <button className="py-2 px-6 text-lg rounded-lg bg-gradient-to-r from-teal-400 to-teal-500   text-white cursor-pointer font-semibold hover:from-teal-500 hover:to-teal-400">
              Update Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateService;
