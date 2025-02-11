import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
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
import PrivateRoute from "./PrivateRoute";
import UpdateService from "../pages/UpdateService";
import AboutUs from "../pages/AboutUs";

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
      },
      {
        path: "/about_us",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/add_service",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "/manage_service",
        element: (
          <PrivateRoute>
            <ManageService></ManageService>
          </PrivateRoute>
        ),
      },
      {
        path: "/booked_services",
        element: (
          <PrivateRoute>
            <BookedServices></BookedServices>
          </PrivateRoute>
        ),
      },
      {
        path: "/service_todo",
        element: (
          <PrivateRoute>
            <ServiceToDo></ServiceToDo>
          </PrivateRoute>
        ),
      },
      {
        path: "/services/:id",
        element: <ServiceDetails></ServiceDetails>,
      },
      {
        path: "/book_now/:id",
        element: (
          <PrivateRoute>
            <BookNow></BookNow>
          </PrivateRoute>
        ),
      },
      {
        path: "/update_service/:id",
        element: <UpdateService></UpdateService>,
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
