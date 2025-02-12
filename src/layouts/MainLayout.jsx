import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ToastContainer } from "react-toastify";
import Footer from "../components/Footer";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MainLayout = () => {
  const { toggle } = useContext(AuthContext);

  return (
    <div className={`max-w-7xl mx-auto ${toggle ? "bg-white" : "bg-gray-800"}`}>
      <header className="sticky top-0 z-10">
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
