import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import googleImg from "../assets/google.png";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createNewUser, setUser, updateUserProfile, loginWithGoogle } =
    useContext(AuthContext);
  const { toggle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state ? location.state : "/";

  const handleSignUp = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const photo = formData.get("photo");
    const email = formData.get("email");
    const password = formData.get("password");

    createNewUser(email, password)
      .then((result) => {
        setUser(result.user);

        updateUserProfile({ displayName: name, photoURL: photo }).then(() => {
          setUser((prev) => ({
            ...prev,
            displayName: name,
            photoURL: photo,
          }));
          toast.success(`Sign-up successful!`);
          navigate("/");
        });
      })
      .catch(() =>
        toast.error(
          "Oops! We couldn't create your account. Please check your details and try again."
        )
      );
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
        className={`card grid grid-cols-1 md:grid-cols-2 w-full mx-auto max-w-4xl shrink-0 shadow-2xl mt-12 rounded-none ${
          toggle ? "bg-white" : "bg-gray-800"
        }`}
      >
        <Helmet>
          <title>Sign Up | Skill Crafters</title>
        </Helmet>
        <div
          className={`flex items-center justify-center text-center ${
            toggle
              ? "bg-gradient-to-br from-teal-400 to-teal-600"
              : "bg-gradient-to-br from-teal-800 to-teal-950"
          }`}
        >
          <div className="p-6">
            <h2 className="text-3xl font-bold text-white mb-3">
              Welcome To Signup
            </h2>
            <p className="text-white font-medium">Already have an account?</p>
            <button className="py-2 px-6 border border-white text-lg rounded-full mt-4 bg-gradient-to-r from-teal-400 to-teal-500  text-white cursor-pointer font-semibold hover:from-teal-500 hover:to-teal-400 ">
              <Link to="/login">Log In</Link>
            </button>
          </div>
        </div>
        <div className="py-6">
          <form onSubmit={handleSignUp} className="card-body px-6 py-0">
            <div className="form-control">
              <label className="label">
                <span
                  className={`label-text text-base font-medium ${
                    toggle ? "text-gray-800" : "text-gray-300"
                  }`}
                >
                  Name:
                </span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className={`input input-bordered ${
                  toggle ? "bg-white" : "bg-gray-700 text-gray-300"
                }`}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span
                  className={`label-text text-base font-medium ${
                    toggle ? "text-gray-800" : "text-gray-300"
                  }`}
                >
                  Photo URL:
                </span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter your photo url"
                className={`input input-bordered ${
                  toggle ? "bg-white" : "bg-gray-700 text-gray-300"
                }`}
                required
              />
            </div>
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
                required
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
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-[57px]"
              >
                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </button>
            </div>
            <div className="form-control mt-4">
              <button className="py-2 px-6 text-lg rounded-md bg-gradient-to-r from-teal-400 to-teal-500 text-white cursor-pointer font-semibold hover:from-teal-500 hover:to-teal-400">
                Sign Up
              </button>
            </div>
            <div className="">
              <div className="divider divider-accent">
                <span className="font-medium text-gray-400">OR</span>
              </div>
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="py-2 w-full px-6 text-lg rounded-md bg-gradient-to-r from-sky-500 to-sky-400 text-white cursor-pointer font-semibold hover:from-sky-400 hover:to-sky-500 mb-3"
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

export default Signup;
