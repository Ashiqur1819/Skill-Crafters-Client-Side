import { FaFacebook, FaLinkedin } from "react-icons/fa";
import logo from "../assets/skill.png"
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import logo2 from "../assets/skill2.png"


const Footer = () => {

  const {toggle} = useContext(AuthContext)

    return (
      <div>
        <footer className={`mt-20 ${toggle ? "bg-blue-50 " : "bg-gray-950"}`}>
          <div className=" max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 lg:gap-24 px-4 md:px-8 lg:px-12 p-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold flex items-center gap-2">
                <img src={toggle ? logo : logo2} className="w-20" alt="" />
                <span className="text-teal-500">
                  Skill<span className="text-sky-400">Crafters</span>
                </span>
              </h2>
              <p
                className={`mt-3 pr-4 ${
                  toggle ? "text-gray-600" : "text-gray-400"
                }`}
              >
                Empowering learners with comprehensive courses, expert guidance,
                and valuable resources designed to help individuals master new
                skills and achieve their personal and professional goals.
              </p>
            </div>
            <div className="flex md:items-end flex-col justify-end">
              <div className="mt-6 flex md:flex-col gap-3 justify-center">
                <a
                  className="text-2xl w-40 flex justify-center  items-center gap-3 border border-gray-500 p-2 bg-gray-800 text-white rounded-md hover:bg-gray-950"
                  href="https://www.facebook.com/Aashiq1819"
                  target="_blank"
                >
                  <FaFacebook></FaFacebook>
                  <span className="text-xl">Facebook</span>
                </a>
                <a
                  className="text-2xl w-40 flex justify-center  items-center gap-3 border border-gray-500 p-2 bg-gray-800 text-white rounded-md hover:bg-gray-950"
                  href="https://www.linkedin.com/in/ashiqurrahman2745/"
                  target="_blank"
                >
                  <FaLinkedin />
                  <span className="text-xl">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
          <p className="mt-3 text-gray-500 text-center">
            &copy; {new Date().getFullYear()} Skill Crafters. All rights
            reserved.
          </p>
        </footer>
      </div>
    );
};

export default Footer;