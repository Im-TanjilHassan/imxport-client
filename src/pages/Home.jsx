import React, { Suspense, use } from "react";
import Header from "../components/Header";
import Category from "../components/Category";
import LatestProduct from "../components/LatestProduct";
import Loader from "../components/Loader";

const latestProductPromise = fetch("http://localhost:3000/latestProduct").then(
  (res) => res.json()
);
const Home = () => {
  const latestProduct = use(latestProductPromise);

  return (
    <div>
      <Header></Header>
      <Category></Category>
      <Suspense fallback={<Loader></Loader>}>
        <LatestProduct products={latestProduct}></LatestProduct>
      </Suspense>
    </div>
  );
};

export default Home;
