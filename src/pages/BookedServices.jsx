import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../provider/AuthProvider";

const BookedServices = () => {
  const {user} = useContext(AuthContext);
  const email = user?.email;
  const [bookedServices, setBookServices] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3000/booked_services")
    .then(res => {
      setBookServices(res.data)
    })
  },[setBookServices])

  const filteredServices = bookedServices.filter(bookService => bookService.userEmail === email)


  console.log(filteredServices);



  return (
    <div>
      <Helmet>
        <title>Booked Service | Skill Crafters</title>
      </Helmet>
      <div>
        
      </div>
    </div>
  );
};

export default BookedServices;
