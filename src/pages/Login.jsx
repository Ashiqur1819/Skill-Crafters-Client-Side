import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import googleImg from "../assets/google.png";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { userLogin, setUser, loginWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { toggle } = useContext(AuthContext);
  const from = location?.state ? location.state : "/";

  const handleLogin = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    userLogin(email, password)
      .then((result) => {
        setUser(result.user);
        toast.success(` Login successful! Welcome back!`);
        navigate(from);
      })
      .catch(() => {
        toast.error("Invalid login credentials. Please try again.");
      });
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        setUser(result.user);
        toast.success(`Google login successful!`);
        navigate(from);
      })
      .catch(() => {
        toast.error(
          "Google login failed. Please check your connection and try again."
        );
      });
  };

  return (
    <div className="px-4">
      <div
        className={`card grid grid-cols-1 md:grid-cols-2 w-full mx-auto max-w-3xl shrink-0 shadow-2xl mt-12 rounded-none ${
          toggle ? "bg-white" : "bg-gray-800"
        }`}
      >
        <Helmet>
          <title>Log In | Skill Crafters</title>
        </Helmet>
        <div
          className={`flex items-center justify-center text-center ${
            toggle
              ? "bg-gradient-to-br from-sky-400 to-sky-600"
              : "bg-gradient-to-br from-sky-900 to-sky-950 "
          }`}
        >
          <div className="p-6">
            <h2 className="text-3xl font-bold text-white mb-3">
              Welcome To Login
            </h2>
            <p className="text-white font-medium">Don't have an account?</p>
            <button className="py-2 px-6 border border-white text-lg rounded-full mt-4 bg-gradient-to-r from-sky-400 to-sky-500  text-white cursor-pointer font-semibold hover:from-sky-500 hover:to-sky-400 ">
              <Link to="/signup">Sign Up</Link>
            </button>
          </div>
        </div>
        <div className="py-6">
          <form onSubmit={handleLogin} className="card-body px-6 py-0">
            <div className="form-control">
              <label className="label">
                <span
                  className={`label-text text-base font-medium ${
                    toggle ? "text-gray-800" : "text-gray-300"
                  }`}
                >
                  Email:
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className={`input input-bordered ${
                  toggle ? "bg-white" : "bg-gray-700 text-gray-300"
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
                  Password:
                </span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className={`input input-bordered ${
                  toggle ? "bg-white" : "bg-gray-700 text-gray-300"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={`absolute right-4 top-[57px] ${
                  toggle ? "text-gray-800" : "text-gray-200"
                }`}
              >
                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </button>
              <label>
                <Link
                  className={`label-text-alt link text-sm font-medium ${
                    toggle ? "text-gray-600" : "text-gray-400"
                  }`}
                >
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control">
              <button className="py-2 px-6 text-lg rounded-md bg-gradient-to-r from-sky-400 to-sky-500   text-white cursor-pointer font-semibold hover:from-sky-500 hover:to-sky-400">
                Log In
              </button>
            </div>
            <div className="">
              <div className="divider divider-accent">
                <span className="font-medium text-gray-400">OR</span>
              </div>
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="py-2 w-full px-6 text-lg rounded-md bg-gradient-to-r from-teal-500 to-teal-400 text-white cursor-pointer font-semibold hover:from-teal-400 hover:to-teal-500"
              >
                <div className="flex items-center justify-center gap-3">
                  <span>Log In with Google</span>
                  <img src={googleImg} className="w-6" alt="" />
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
