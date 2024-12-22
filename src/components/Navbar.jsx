import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";

const Navbar = () => {

  const { user, logOut} = useContext(AuthContext);

    const links = (
      <div className="lg:flex items-center gap-6">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        {user && user?.email && (
          <li>
            <NavLink to="/my_profile">Dashboard</NavLink>
          </li>
        )}
      </div>
    );

    return (
      <div className="navbar px-3 md:px-6 lg:px-12 py-6 bg-blue-50 mb-6">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-md dropdown-content bg-gray-900 rounded-box z-[1] mt-6 w-60 p-2 shadow text-white"
            >
              {links}
            </ul>
          </div>
          <a className="text-lg text-teal-500 md:text-3xl font-bold hidden md:inline-block">
            Skill Crafters
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px- gap-6 text-base ">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center gap-5">
              <div
                className="tooltip tooltip-bottom"
                data-tip={user?.displayName}
              >
                <img
                  className="w-10 md:w-12 rounded-full cursor-pointer"
                  src={user?.photoURL}
                  alt=""
                />
              </div>
              <button onClick={logOut}>
                <Link
                  to="/"
                  className="py-2 px-6 text-lg rounded-lg bg-gradient-to-r from-red-500 to-red-600 text-white cursor-pointer font-semibold hover:from-red-600 hover:to-red-500"
                >
                  Log Out
                </Link>
              </button>
            </div>
          ) : (
            <button>
              <Link
                to="/login"
                className="py-2 px-6 text-lg rounded-lg bg-gradient-to-r from-sky-400 to-sky-500 text-white cursor-pointer font-semibold hover:from-sky-500 hover:to-sky-400"
              >
                Log In
              </Link>
            </button>
          )}
        </div>
      </div>
    );
};

export default Navbar;