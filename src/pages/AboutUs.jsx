import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const AboutUs = () => {
    const {toggle} = useContext(AuthContext)

    return (
      <div className="mt-6 px-4 md:px-6 lg:px-8 max-w-5xl mx-auto shadow-md py-12">
        <h2 className="text-3xl md:text-5xl text-teal-500 text-center font-bold mb-3">
          About Us
        </h2>
        <div className="mt-6">
          <h3 className="text-2xl font-bold text-sky-400">
            Empowering Learners, Crafting Futures
          </h3>
          <p className={`${toggle ? "text-gray-700" : "text-gray-400"}`}>
            Welcome to Skill Crafters, your ultimate destination for skill
            development and lifelong learning! We are committed to helping
            individuals acquire, enhance, and master the skills they need to
            thrive in today’s fast-paced world.
          </p>
          <h3 className="text-2xl font-bold text-sky-400 mt-3">Our Mission</h3>
          <p className={`${toggle ? "text-gray-700" : "text-gray-400"}`}>
            At Skill Crafters, we aim to provide high-quality, accessible, and
            practical learning experiences that empower people from all
            backgrounds. Education should be engaging, flexible, and
            result-driven, enabling learners to achieve their personal and
            professional goals.
          </p>
          <h3 className="text-2xl font-bold text-sky-400 mt-3">
            What We Offer
          </h3>
          <ul
            className={`list-disc list-inside ${
              toggle ? "text-gray-700" : "text-gray-400"
            }`}
          >
            <li>
              Expert-Led Courses – Learn from industry professionals and subject
              matter experts.
            </li>
            <li>
              Interactive Learning – Engaging content, quizzes, and hands-on
              projects.
            </li>
            <li>
              Flexible Learning – Study anytime, anywhere, at your own pace.
            </li>
            <li>
              Career-Focused Skills – Courses designed to help you advance in
              your career or explore new opportunities.
            </li>
          </ul>
          <h3 className="text-2xl font-bold text-sky-400 mt-3">Who We Are</h3>
          <p className={`${toggle ? "text-gray-700" : "text-gray-400"}`}>
            We are a passionate team of educators, professionals, and tech
            enthusiasts dedicated to making learning accessible, practical, and
            enjoyable. Whether you’re a student, a working professional, or
            someone looking to explore new fields, Skill Crafters is here to
            support your journey.
          </p>
          <h3 className="text-2xl font-bold text-sky-400 mt-3">
            Why Choose Skill Crafters?
          </h3>
          <ul
            className={`list-disc list-inside ${
              toggle ? "text-gray-700" : "text-gray-400"
            }`}
          >
            <li>Learn from the Best – Courses crafted by industry experts.</li>
            <li>
              Real-World Applications – Practical skills that you can apply
              immediately.
            </li>
            <li>
              Community Support – Connect with fellow learners and experts.
            </li>
            <li>
              Affordable & Accessible – Quality education at your fingertips.
            </li>
          </ul>
          <h3 className="text-2xl font-bold text-sky-400 mt-3">
            Join Us Today!
          </h3>
          <p className={`${toggle ? "text-gray-700" : "text-gray-400"}`}>
            Your journey to personal and professional growth starts here.
            Whether you’re learning a new skill, upgrading your knowledge, or
            preparing for your dream job, Skill Crafters is here to guide you.
          </p>
          <h4 className="text-xl font-bold text-teal-500 mt-6">
            Start Learning. Start Growing. Start Crafting Your Future!
          </h4>
        </div>
      </div>
    );
};

export default AboutUs;