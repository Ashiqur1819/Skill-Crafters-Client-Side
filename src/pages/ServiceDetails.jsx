import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const service = useLoaderData();
  const {
    serviceImage,
    serviceName,
    price,
    providerName,
    providerImage,
    serviceArea,
    description,
  } = service;

  return (
    <div>
      <Helmet>
        <title>Service Details | Skill Crafters</title>
      </Helmet>
      dfdfd
    </div>
  );
};

export default ServiceDetails;
