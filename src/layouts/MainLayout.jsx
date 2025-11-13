import { Outlet, useLocation } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";
import Aos from "aos";

const MainLayout = () => {
  const location = useLocation();
  useEffect(() => {
    Aos.refresh();
  }, [location.pathname]);
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
