import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const MainLayout = () => {
    return (
      <div>
        <header>
          <Navbar></Navbar>
        </header>
        <main className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10">
          <Outlet></Outlet>
        </main>
      </div>
    );
};

export default MainLayout;