import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="container mx-auto">
        <header>
          <Navbar></Navbar>
        </header>
        <main className="pt-20">
          <Outlet></Outlet>
        </main>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
