import axios from "axios";
import { useEffect, useState } from "react";
import PopularServiceCard from "./PopularServiceCard";

const PopularServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/services")
        .then(res => {
            setServices(res.data)
            console.log(res.data)
        })
    }, [])

    return (
      <div>
        <h2 className="text-3xl md:text-4xl text-teal-500 text-center font-bold mb-3">Popular Services</h2>
        <p className="max-w-3xl mx-auto text-center">
          Explore our top-rated educational services, from personalized tutoring to skill-building workshops, designed to empower learners of all ages. Unlock your potential today!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {
                services.map(service => <PopularServiceCard service={service} key={service._id}></PopularServiceCard>)
            }
        </div>
      </div>
    );
};

export default PopularServices;