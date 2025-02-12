import { Link } from "react-router-dom";
import errorImg from "../assets/error.gif";
import { Helmet } from "react-helmet-async";

const Error = () => {
  return (
    <div className="bg-[#F6F6F4] min-h-svh flex items-center justify-center">
      <Helmet>
        <title>Error | Skill Crafters</title>
      </Helmet>
      <div className="flex flex-col items-center justify-center">
        <img src={errorImg} className="w-2/3" alt="" />
        <button className="py-2 px-6 text-lg rounded-md bg-gradient-to-r from-teal-400 to-teal-500 text-white cursor-pointer font-semibold hover:from-teal-500 hover:to-teal-400">
          <Link to="/">Back To Home</Link>
        </button>
      </div>
    </div>
  );
};

export default Error;
