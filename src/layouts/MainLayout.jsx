import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ToastContainer } from "react-toastify";


const MainLayout = () => {
    return (
      <div>
        <header>
          <Navbar></Navbar>
        </header>
        <main>
          <Outlet></Outlet>
        </main>
        <ToastContainer></ToastContainer>
      </div>
    );
};

export default MainLayout;