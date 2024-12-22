import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const BookNow = () => {

    const {user} = useContext(AuthContext);
    const userEmail = user?.email;
    const userName = user?.displayName
    console.log(user)
    const service = useLoaderData();
    const {
      _id,
      serviceImage,
      serviceName,
      price,
      providerName,
      serviceArea,
    } = service;

    return (
      <div className="card w-full mx-auto max-w-2xl shrink-0 shadow-2xl mt-12 bg-white rounded-md">
        <Helmet>
          <title>Book Now | Skill Crafters</title>
        </Helmet>
        <div>
          <form className="card-body">
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
                name="id"
                value={_id}
                readOnly
                placeholder="Service id"
                className="input input-bordered text-pink-500"
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
                name="name"
                value={serviceName}
                readOnly
                placeholder="Service name"
                className="input input-bordered text-pink-500"
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
                name="image"
                value={serviceImage}
                readOnly
                placeholder="Service image"
                className="input input-bordered text-pink-500"
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
                name="provider_email"
                placeholder="Provider email"
                className="input input-bordered text-pink-500"
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
                name="provider_name"
                value={providerName}
                readOnly
                placeholder="Provider name"
                className="input input-bordered text-pink-500"
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
                name="user_email"
                value={userEmail}
                readOnly
                placeholder="User email"
                className="input input-bordered text-pink-500"
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
                name="user_name"
                value={userName}
                readOnly
                placeholder="User name"
                className="input input-bordered text-pink-500"
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
                className="input input-bordered text-pink-500"
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
                name="area"
                value={serviceArea}
                placeholder="Area"
                className="input input-bordered text-pink-500"
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text text-base font-medium">Price:</span>
              </label>
              <input
                type="text"
                name="price"
                value={price}
                readOnly
                placeholder="Price"
                className="input input-bordered text-pink-500"
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
    );
};

export default BookNow;