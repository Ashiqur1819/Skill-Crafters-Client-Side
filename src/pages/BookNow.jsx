import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const BookNow = () => {

    const navigate = useNavigate()
    const {user} = useContext(AuthContext);
    const userEmail = user?.email;
    const userName = user?.displayName;
    const service = useLoaderData();
    const {
      _id,
      serviceImage,
      serviceName,
      price,
      providerName,
      providerEmail,
      serviceArea,
    } = service;

    const handlePurchaseService = e => {
      e.preventDefault();
      const form = e.target

      const serviceId = form.serviceId.value
      const serviceName = form.serviceName.value
      const serviceImage = form.serviceImage.value
      const providerName = form.providerName.value
      const providerEmail = form.providerEmail.value
      const userName = form.userName.value
      const userEmail = form.userEmail.value
      const date = form.date.value
      const serviceArea = form.serviceArea.value
      const price = form.price.value
      const serviceStatus = "Pending"

      const bookedServices = {serviceId, serviceName, serviceImage, providerName, providerEmail, userName, userEmail, date, serviceArea, price, serviceStatus}
      
      // Send data from client side to server side
      axios
        .post("http://localhost:3000/booked_services", bookedServices)
        .then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              icon: "success",
              title: "Congratulations",
              text: `${service.serviceName} added successfully`,
            });
          }
          navigate("/booked_services");
        })
        .catch(err => {
          toast.error(err.response.data)
        })
    }
    return (
      <div className='px-4'>
        <div className="card w-full mx-auto max-w-2xl shrink-0 shadow-2xl mt-12 bg-white rounded-md">
          <Helmet>
            <title>Book Now | Skill Crafters</title>
          </Helmet>
          <div>
            <form onSubmit={handlePurchaseService} className="card-body">
              <h2 className="text-4xl font-bold text-sky-400 text-center">
                Book Now
              </h2>
              <div className="divider my-2"></div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base font-medium">
                    ServiceId :
                  </span>
                </label>
                <input
                  type="text"
                  name="serviceId"
                  defaultValue={_id}
                  readOnly
                  placeholder="Service id"
                  className="input input-bordered text-gray-500"
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text text-base font-medium">
                    Service Name:
                  </span>
                </label>
                <input
                  type="text"
                  name="serviceName"
                  defaultValue={serviceName}
                  readOnly
                  placeholder="Service name"
                  className="input input-bordered text-gray-500"
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text text-base font-medium">
                    Service Image:
                  </span>
                </label>
                <input
                  type="url"
                  name="serviceImage"
                  defaultValue={serviceImage}
                  readOnly
                  placeholder="Service image"
                  className="input input-bordered text-gray-500"
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text text-base font-medium">
                    Provider Name:
                  </span>
                </label>
                <input
                  type="text"
                  name="providerName"
                  defaultValue={providerName}
                  readOnly
                  placeholder="Provider name"
                  className="input input-bordered text-gray-500"
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text text-base font-medium">
                    Provider Email:
                  </span>
                </label>
                <input
                  type="email"
                  name="providerEmail"
                  defaultValue={providerEmail}
                  placeholder="Provider email"
                  className="input input-bordered text-gray-500"
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text text-base font-medium">
                    User Name:
                  </span>
                </label>
                <input
                  type="text"
                  name="userName"
                  defaultValue={userName}
                  readOnly
                  placeholder="User name"
                  className="input input-bordered text-gray-500"
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text text-base font-medium">
                    User Email:
                  </span>
                </label>
                <input
                  type="text"
                  name="userEmail"
                  defaultValue={userEmail}
                  readOnly
                  placeholder="User email"
                  className="input input-bordered text-gray-500"
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text text-base font-medium">
                    Service Taking Date:
                  </span>
                </label>
                <input
                  type="date"
                  name="date"
                  placeholder="Date"
                  className="input input-bordered text-gray-500"
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text text-base font-medium">
                    Service Area:
                  </span>
                </label>
                <input
                  type="text"
                  name="serviceArea"
                  defaultValue={serviceArea}
                  placeholder="Area"
                  className="input input-bordered text-gray-500"
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text text-base font-medium">
                    Price:
                  </span>
                </label>
                <input
                  type="text"
                  name="price"
                  defaultValue={price}
                  readOnly
                  placeholder="Price"
                  className="input input-bordered text-gray-500"
                />
              </div>
              <div className="form-control mt-4">
                <button className="py-2 px-6 text-lg rounded-lg bg-gradient-to-r from-teal-500 to-teal-400   text-white cursor-pointer font-semibold hover:from-teal-400 hover:to-teal-500">
                  Purchase
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default BookNow;