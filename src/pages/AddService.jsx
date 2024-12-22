import { Helmet } from "react-helmet-async";

const AddService = () => {
  return (
    <div className="card w-full mx-auto max-w-2xl shrink-0 shadow-2xl mt-12 bg-white rounded-md">
      <Helmet>
        <title>Add Service | Skill Crafters</title>
      </Helmet>
      <form className="card-body">
        <h2 className="text-4xl font-bold text-pink-500 text-center">
          Add A Service
        </h2>
        <div className="divider my-2"></div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-base font-medium">
              Service Image URL:
            </span>
          </label>
          <input
            type="url"
            name="image"
            placeholder="Service image url"
            className="input input-bordered"
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
            placeholder="Service name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text text-base font-medium">
              Service Price:
            </span>
          </label>
          <input
            type="number"
            name="price"
            placeholder="Service price"
            className="input input-bordered"
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
            placeholder="Service area"
            className="input input-bordered"
          />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text text-base font-medium">
              Description:
            </span>
          </label>
          <input
            type="text"
            name="description"
            placeholder="Description"
            className="input input-bordered"
          />
        </div>
        <div className="form-control mt-4">
          <button className="py-2 px-6 text-lg rounded-lg bg-gradient-to-r from-sky-400 to-sky-500   text-white cursor-pointer font-semibold hover:from-sky-500 hover:to-sky-400">
            Add Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddService;
