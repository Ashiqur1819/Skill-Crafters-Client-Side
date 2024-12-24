import axios from "axios";
import { useEffect, useState } from "react";
import RecomendedServiceCard from "./RecomendedServiceCard";


const RecomendedServices = () => {

    const [services, setServices] = useState([]);

     useEffect(() => {
       axios.get("http://localhost:3000/services").then((res) => {
         setServices(res.data);
       });
     }, []);
     const sortedServices = services.sort((a, b) => b.price - a.price);
     console.log(sortedServices)

    return (
      <div>
        <h2 className="text-3xl md:text-5xl text-teal-500 text-center font-bold mb-3">
          Recomended For You
        </h2>
        <p className="max-w-4xl mx-auto text-center">
          Discover a carefully curated selection of recommendations tailored to
          your preferences and interests. This section is designed to make your
          experience seamless by helping you find exactly what you need with
          ease and convenience.</p>
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {
              sortedServices.slice(0, 4).map(service => <RecomendedServiceCard service={service} key={service._id}></RecomendedServiceCard>)
            }
          </div>
      </div>
    );
};

export default RecomendedServices;