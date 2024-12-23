import { createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Services from "../pages/AllServices";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import AddService from "../pages/AddService";
import ManageService from "../pages/ManageService";
import BookedServices from "../pages/BookedServices";
import ServiceToDo from "../pages/ServiceToDo";
import Error from "../pages/Error";
import ServiceDetails from "../pages/ServiceDetails";
import BookNow from "../pages/BookNow";
import AllServices from "../pages/AllServices";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all_services",
        element: <AllServices></AllServices>,
        loader: () => fetch("http://localhost:3000/services")
      },
      {
        path: "/add_service",
        element: <AddService></AddService>,
      },
      {
        path: "/manage_service",
        element: <ManageService></ManageService>,
      },
      {
        path: "/booked_services",
        element: <BookedServices></BookedServices>,
      },
      {
        path: "/service_todo",
        element: <ServiceToDo></ServiceToDo>,
      },
      {
        path: "/services/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/services/${params.id}`),
      },
      {
        path: "/book_now/:id",
        element: <BookNow></BookNow>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/services/${params.id}`),
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;