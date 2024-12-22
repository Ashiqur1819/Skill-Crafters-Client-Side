import { FaFacebook, FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
      <div>
        <footer className="bg-slate-100 mt-20">
          <div className=" max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 lg:gap-24 px-4 md:px-8 lg:px-12 p-12">
            <div>
              <h2 className="text-5xl font-bold text-red-600">
                Skill Crafters
              </h2>
              <p className="mt-3">
                Empowering learners with comprehensive courses, expert guidance,
                and valuable resources designed to help individuals master new
                skills and achieve their personal and professional goals.
              </p>
            </div>
            <div className="flex md:items-end flex-col justify-end">
              <div className="mt-6 flex flex-col gap-3">
                <a
                  className="text-2xl flex items-center gap-3 border p-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
                  href="https://www.facebook.com/Aashiq1819"
                  target="_blank"
                >
                  <FaFacebook></FaFacebook>
                  <span className="text-xl">Facebook</span>
                </a>
                <a
                  className="text-2xl flex items-center gap-3 border p-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
                  href="https://www.linkedin.com/in/ashiqurrahman2745/"
                  target="_blank"
                >
                  <FaLinkedin />
                  <span className="text-xl">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
          <p className="mt-3 text-gray-600 text-center">
            &copy; {new Date().getFullYear()} Skill Crafters. All rights
            reserved.
          </p>
        </footer>
      </div>
    );
};

export default Footer;