import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const FAQ = () => {
    const{toggle} = useContext(AuthContext)
    return (
      <div className="px-4">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-teal-500 capitalize mt-3">
          FAQ - Your Questions Answered
        </h2>
        <div className={`${toggle ? "bg-white" : "bg-gray-800-900"}`}>
          <div className={`collapse collapse-plus mt-12`}>
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div
              className={`collapse-title text-xl font-medium ${
                toggle ? "text-gray-600" : "text-gray-300"
              }`}
            >
              What is SkillCrafters?
            </div>
            <div className="collapse-content">
              <p
                className={`pr-6 ${toggle ? "text-gray-500" : "text-gray-400"}`}
              >
                SkillCrafters is an online platform that offers a wide range of
                educational services, including courses, tutorials, and
                personalized learning programs designed to help you achieve your
                academic and professional goals.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus">
            <input type="radio" name="my-accordion-3" />
            <div
              className={`collapse-title text-xl font-medium ${
                toggle ? "text-gray-600" : "text-gray-300"
              }`}
            >
              Who can benefit from your services?
            </div>
            <div className="collapse-content">
              <p className={`${toggle ? "text-gray-500" : "text-gray-400"}`}>
                Our services are suitable for students, professionals, and
                anyone interested in lifelong learning. Whether you’re preparing
                for exams, upskilling, or pursuing a new hobby, we have
                something for everyone.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus">
            <input type="radio" name="my-accordion-3" />
            <div
              className={`collapse-title text-xl font-medium ${
                toggle ? "text-gray-600" : "text-gray-300"
              }`}
            >
              Are your courses self-paced or instructor-led?
            </div>
            <div className="collapse-content">
              <p className={`${toggle ? "text-gray-500" : "text-gray-400"}`}>
                We offer both self-paced and instructor-led courses to cater to
                different learning styles and schedules.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus">
            <input type="radio" name="my-accordion-3" />
            <div
              className={`collapse-title text-xl font-medium ${
                toggle ? "text-gray-600" : "text-gray-300"
              }`}
            >
              Do I need any prior knowledge to enroll in a course?
            </div>
            <div className="collapse-content">
              <p className={`${toggle ? "text-gray-500" : "text-gray-400"}`}>
                No, most of our courses are designed for beginners. However,
                advanced courses may require foundational knowledge, which will
                be specified in the course details.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus">
            <input type="radio" name="my-accordion-3" />
            <div
              className={`collapse-title text-xl font-medium ${
                toggle ? "text-gray-600" : "text-gray-300"
              }`}
            >
              Is my personal information secure?
            </div>
            <div className="collapse-content">
              <p className={`${toggle ? "text-gray-500" : "text-gray-400"}`}>
                Yes, we take data security seriously. Your information is
                protected with advanced encryption, and we never share your data
                without your consent.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus">
            <input type="radio" name="my-accordion-3" />
            <div
              className={`collapse-title text-xl font-medium ${
                toggle ? "text-gray-600" : "text-gray-300"
              }`}
            >
              How can I contact customer support?
            </div>
            <div className="collapse-content">
              <p className={`${toggle ? "text-gray-500" : "text-gray-400"}`}>
                You can reach out to our support team via email at
                ashiqurrahman1819@gmail.com, through live chat, or by filling out
                the contact form on our website.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default FAQ;