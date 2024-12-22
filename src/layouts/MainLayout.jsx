import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ToastContainer } from "react-toastify";
import Footer from "../components/Footer";


const MainLayout = () => {
    return (
      <div className="max-w-7xl mx-auto">
        <header>
          <Navbar></Navbar>
        </header>
        <main>
          <Outlet></Outlet>
        </main>
        <footer>
          <Footer></Footer>
        </footer>
        <ToastContainer></ToastContainer>
      </div>
    );
};

export default MainLayout;