import chooseImg from "../assets/choose.jpg"

const ChooseUs = () => {
    return (
      <div>
        <h3 className="text-xl text-gray-700 font-medium">___Why Choose Us</h3>
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-teal-500 capitalize mt-3">
          Because your learning matters to us...
        </h2>
        <div className="flex items-center gap-12 mt-12">
          <div className="grid grid-cols-2 gap-8 flex-1">
            <div className="bg-blue-50 p-6 text-center rounded-md">
              <h2 className="text-5xl">🎓</h2>
              <p className="text-2xl text-sky-500 font-semibold mt-3">
                Expert Tutors
              </p>
            </div>
            <div className="bg-blue-50 p-6 text-center rounded-md">
              <h2 className="text-5xl">🕒</h2>
              <p className="text-2xl text-sky-500 font-semibold mt-3">
                Flexible Scheduling
              </p>
            </div>
            <div className="bg-blue-50 p-6 text-center rounded-md">
              <h2 className="text-5xl">🧹</h2>
              <p className="text-2xl text-sky-500 font-semibold mt-3">
                Clean & Safe Learning Spaces
              </p>
            </div>
            <div className="bg-blue-50 p-6 text-center rounded-md">
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