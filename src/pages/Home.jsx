import React, { Suspense, useEffect, useState } from "react";
import Header from "../components/Header";
import Category from "../components/Category";
import LatestProduct from "../components/LatestProduct";
import Loader from "../components/Loader";
import Aos from "aos";

const Home = () => {
  const [latestProducts, setLatestProducts] = useState([])

  useEffect(() => {
    document.title = "ImXport | Home";

    Aos.refresh();

    fetch("https://imxport-server.vercel.app/latestProduct")
      .then((res) => res.json())
      .then((data) => setLatestProducts(...latestProducts, data));
    
  }, [])


  return (
    <div>
      <Header></Header>
      <Category></Category>
      <Suspense fallback={<Loader></Loader>}>
        <LatestProduct products={latestProducts}></LatestProduct>
      </Suspense>
    </div>
  );
};

export default Home;
