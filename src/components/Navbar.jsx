import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";
import logo from "../assets/skill.png";
import { FaMoon } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import logo2 from "../assets/skill2.png";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, setUser, logOut, toggle, setToggle, handleToggle } =
    useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then((result) => {
      toast.success("You've successfully logged out. See you soon!");
      setUser(result);
    });
  };

  return (
    <div
      className={`navbar px-4 md:px-8 lg:px-10 py-3 ${
        toggle ? "bg-blue-50" : "bg-gray-950"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className={`lg:hidden mr-2 ${
              !toggle ? "text-white" : "text-gray-800"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
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
            className={`menu dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow ${
              toggle ? "bg-base-100" : "bg-gray-950 text-gray-400"
            }`}
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/all_services">All Services</NavLink>
            </li>
            <li>
              {user?.email && (
                <details>
                  <summary>Dashboard</summary>
                  <ul
                    className={`p-2 w-44 rounded-md ${
                      toggle ? "bg-white" : "bg-gray-950"
                    }`}
                  >
                    <li>
                      <Link to="add_service">Add Service</Link>
                    </li>
                    <li>
                      <Link to="manage_service">Manage Service</Link>
                    </li>
                    <li>
                      <Link to="booked_services">Booked-Services</Link>
                    </li>
                    <li>
                      <Link to="service_todo">Service-To-Do</Link>
                    </li>
                  </ul>
                </details>
              )}
            </li>
            <div
              className={`md:mr-12 text-2xl border h-12 w-12 flex items-center justify-center rounded-full ${
                toggle ? "bg-white" : "bg-gray-950"
              }`}
            >
              {!toggle ? (
                <button onClick={() => handleToggle(setToggle(!toggle))}>
                  <CiLight></CiLight>
                </button>
              ) : (
                <button onClick={() => handleToggle(setToggle(!toggle))}>
                  <FaMoon></FaMoon>
                </button>
              )}
            </div>
          </ul>
        </div>
        <div className="text-lg text-teal-500 md:text-3xl font-bold">
          <Link to="/">
            <div className="flex items-center gap-1">
              <img src={toggle ? logo : logo2} className="w-12" alt="" />
              <p className="hidden md:inline">
                Skill<span className="text-sky-400">Crafters</span>
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul
          className={`menu menu-horizontal px-1 z-10 gap-6 ${
            toggle ? "text-gray-600" : "text-gray-400"
          }`}
        >
          <li className="text-base">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="text-base">
            <NavLink to="/all_services">All Services</NavLink>
          </li>
          <li className="text-base">
            <NavLink to="/about_us">About Us</NavLink>
          </li>
          <li className="text-base">
            {user?.email && (
              <details>
                <summary>Dashboard</summary>
                <ul
                  className={`p-2 w-44 ${
                    toggle ? "bg-blue-50" : "bg-gray-950"
                  }`}
                >
                  <li>
                    <Link to="add_service">Add Service</Link>
                  </li>
                  <li>
                    <Link to="manage_service">Manage Service</Link>
                  </li>
                  <li>
                    <Link to="booked_services">Booked-Services</Link>
                  </li>
                  <li>
                    <Link to="service_todo">Service-To-Do</Link>
                  </li>
                </ul>
              </details>
            )}
          </li>
          <div
            className={`md:ml-24 text-xl border border-teal-400 h-10 w-10 flex items-center justify-center rounded-full ${
              toggle ? "bg-white" : "bg-gray-950"
            }`}
          >
            {!toggle ? (
              <button
                className="text-white"
                onClick={() => handleToggle(setToggle(!toggle))}
              >
                <CiLight></CiLight>
              </button>
            ) : (
              <button
                className="text-black"
                onClick={() => handleToggle(setToggle(!toggle))}
              >
                <FaMoon></FaMoon>
              </button>
            )}
          </div>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-5 z-10">
            <div
              className="tooltip tooltip-bottom"
              data-tip={user?.displayName}
            >
              <img
                className="w-11  rounded-full cursor-pointer"
                src={user?.photoURL}
                referrerPolicy="no-referrer"
                alt=""
              />
            </div>
            <button onClick={handleLogOut}>
              <Link
                to="/"
                className="py-2 px-4 rounded-lg bg-gradient-to-r from-red-500 to-red-600 text-white cursor-pointer font-semibold hover:from-red-600 hover:to-red-500"
              >
                Log Out
              </Link>
            </button>
          </div>
        ) : (
          <button>
            <Link
              to="/login"
              className="py-2 px-4 rounded-lg bg-gradient-to-r from-sky-500 to-sky-400 text-white cursor-pointer font-semibold hover:from-sky-400 hover:to-sky-500"
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
