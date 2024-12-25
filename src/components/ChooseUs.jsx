import { useContext } from "react";
import chooseImg from "../assets/choose.jpg"
import { AuthContext } from "../provider/AuthProvider";

const ChooseUs = () => {
  const {toggle} = useContext(AuthContext)
    return (
      <div className="px-4">
        <h3
          className={`text-xl font-medium ${
            toggle ? "text-gray-700" : "text-gray-200"
          }`}
        >
          ___Why Choose Us
        </h3>
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-teal-500 capitalize mt-3">
          Because your learning matters to us...
        </h2>
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 mt-12">
          <div className="grid grid-cols-2 gap-6 md:gap-8 flex-1">
            <div
              className={`p-6 text-center rounded-md flex flex-col items-center justify-center ${
                toggle ? "bg-blue-50" : "bg-zinc-900"
              }`}
            >
              <h2 className="text-5xl">🎓</h2>
              <p className="text-2xl text-sky-500 font-semibold mt-3">
                Expert Tutors
              </p>
            </div>
            <div
              className={`p-6 text-center rounded-md flex flex-col items-center justify-center ${
                toggle ? "bg-blue-50" : "bg-zinc-900"
              }`}
            >
              <h2 className="text-5xl">🕒</h2>
              <p className="text-2xl text-sky-500 font-semibold mt-3">
                Flexible Scheduling
              </p>
            </div>
            <div
              className={`p-6 text-center rounded-md flex flex-col items-center justify-center ${
                toggle ? "bg-blue-50" : "bg-zinc-900"
              }`}
            >
              <h2 className="text-5xl">🧹</h2>
              <p className="text-2xl text-sky-500 font-semibold mt-3">
                Clean & Safe Learning Spaces
              </p>
            </div>
            <div
              className={`p-6 text-center rounded-md flex flex-col items-center justify-center ${
                toggle ? "bg-blue-50" : "bg-zinc-900"
              }`}
            >
              <h2 className="text-5xl">🌟</h2>
              <p className="text-2xl text-sky-500 font-semibold mt-3">
                Personalized Attention
              </p>
            </div>
          </div>
          <div className="flex-1">
            <img src={chooseImg} className="w-full rounded-md" alt="" />
          </div>
        </div>
      </div>
    );
};

export default ChooseUs;