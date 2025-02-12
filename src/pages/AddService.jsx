import axios from "axios";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddService = () => {
  const { toggle } = useContext(AuthContext);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const providerName = user?.displayName;
  const providerImage = user?.photoURL;
  const providerEmail = user?.email;

  const handleAddService = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const service = Object.fromEntries(formData.entries());
    service.providerName = providerName;
    service.providerImage = providerImage;
    service.providerEmail = providerEmail;

    // Send service data from client side to server side
    axios.post("https://skill-crafters-server-side.vercel.app/services", service).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Congratulations",
          text: `${service.serviceName} added successfully`,
        });
      }
      navigate("/manage_service");
    })
    .catch(err => {
      toast.error(err.message)
    })
  };

  return (
    <div className="px-4">
      <div
        className={`card w-full mx-auto max-w-2xl shrink-0 shadow-2xl mt-12 rounded-md ${
          toggle ? "bg-white " : "bg-gray-800 border border-gray-600"
        }`}
      >
        <Helmet>
          <title>Add Service | Skill Crafters</title>
        </Helmet>
        <form onSubmit={handleAddService} className="card-body">
          <h2 className="text-4xl font-bold text-teal-500 text-center">
            Add A Service
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
              placeholder="Service image url"
             className={`input input-bordered rounded-md border border-gray-700 focus:border focus:border-gray-600 ${
                toggle ? "bg-white text-gray-600" : "bg-gray-800 text-gray-400"
              }`}
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span
                className={`label-text text-base font-medium ${
                  toggle ? "text-gray-800" : "text-gray-300"
                }`}
              >
                Service Name:
              </span>
            </label>
            <input
              type="text"
              name="serviceName"
              placeholder="Service name"
             className={`input input-bordered rounded-md border border-gray-700 focus:border focus:border-gray-600 ${
                toggle ? "bg-white text-gray-600" : "bg-gray-800 text-gray-400"
              }`}
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span
                className={`label-text text-base font-medium ${
                  toggle ? "text-gray-800" : "text-gray-300"
                }`}
              >
                Service Price:
              </span>
            </label>
            <input
              type="number"
              name="price"
              placeholder="Service price"
            className={`input input-bordered rounded-md border border-gray-700 focus:border focus:border-gray-600 ${
                toggle ? "bg-white text-gray-600" : "bg-gray-800 text-gray-400"
              }`}
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span
                className={`label-text text-base font-medium ${
                  toggle ? "text-gray-800" : "text-gray-300"
                }`}
              >
                Service Area:
              </span>
            </label>
            <input
              type="text"
              name="serviceArea"
              placeholder="Service area"
            className={`input input-bordered rounded-md border border-gray-700 focus:border focus:border-gray-600 ${
                toggle ? "bg-white text-gray-600" : "bg-gray-800 text-gray-400"
              }`}
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span
                className={`label-text text-base font-medium ${
                  toggle ? "text-gray-800" : "text-gray-300"
                }`}
              >
                Description:
              </span>
            </label>
            <input
              type="text"
              name="description"
              placeholder="Description"
            className={`input input-bordered rounded-md border border-gray-700 focus:border focus:border-gray-600 ${
                toggle ? "bg-white text-gray-600" : "bg-gray-800 text-gray-400"
              }`}
            />
          </div>
          <div className="form-control mt-4">
            <button className="py-2 px-6 text-lg rounded-md bg-gradient-to-r from-sky-400 to-sky-500   text-white cursor-pointer font-semibold hover:from-sky-500 hover:to-sky-400">
              Add Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
