import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import s1 from "../assets/1.jpg";
import s2 from "../assets/2.jpg";
import s3 from "../assets/3.webp";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { easeInOut } from "motion";

const Slider = () => {
  return (
    <div className="relative z-0">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div
            className="h-[400px] md:h-[550px] flex items-center"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(${s1})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="max-w-3xl p-6 md:p-12 lg:p-20">
              <motion.h2
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{ duration: 1, ease: easeInOut }}
                className="text-3xl md:text-5xl lg:text-7xl font-bold text-yellow-400 mb-6"
              >
                Unlock the Power of Learning
              </motion.h2>
              <motion.p
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: easeInOut }}
                className="text-white mb-6"
              >
                Dive into a world where education meets innovation. Our platform
                offers interactive courses, expert guidance, and personalized
                learning paths to help you achieve your goals.
              </motion.p>
              <motion.button
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                transition={{ duration: 1, ease: easeInOut }}
                className="py-2 px-6 text-lg rounded-md bg-gradient-to-r from-sky-500 to-sky-400 text-white cursor-pointer font-semibold hover:from-sky-400 hover:to-sky-500"
              >
                <Link to="/all_services">Explore Now</Link>
              </motion.button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-[400px] md:h-[550px] flex items-center"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(${s2})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="max-w-3xl p-6 md:p-12 lg:p-20">
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-yellow-400 mb-6">
                Learn Anytime, Anywhere
              </h2>
              <p className="text-white mb-6">
                Seamlessly integrate learning into your daily life with our
                flexible, mobile-friendly platform. Access quality education
                whenever and wherever you need it.
              </p>
              <button className="py-2 px-6 text-lg rounded-md bg-gradient-to-r from-sky-500 to-sky-400 text-white cursor-pointer font-semibold hover:from-sky-400 hover:to-sky-500">
                <Link to="/all_services">Explore Now</Link>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-[400px] md:h-[550px] flex items-center"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${s3})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="max-w-4xl p-6 md:p-12 lg:p-20">
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-yellow-400 mb-6">
                Transform Your Education Experience
              </h2>
              <p className="text-white mb-8">
                Experience a new way of learning that’s engaging, effective, and
                fun. Our innovative tools and techniques are designed to make
                education more accessible than ever.
              </p>
              <button className="py-2 px-6 text-lg rounded-md bg-gradient-to-r from-sky-500 to-sky-400 text-white cursor-pointer font-semibold hover:from-sky-400 hover:to-sky-500">
                <Link to="/all_services">Explore Now</Link>
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
