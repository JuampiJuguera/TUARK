import React from "react";
import { ProductGalleryList } from "../components/ProductGalleryList";
import { Link } from "react-router-dom";
import banner from "../../assets/img/banner1.png";

export const Home = () => {
  return (
    <div className="w-full text-dark">
      <Link to={"/catalog/all"}>
        <img className=" -mt-4 w-full" src={banner} />
      </Link>
      <h2 className="font-bold mx-2 mt-2 ">Mas recientes</h2>
      <ProductGalleryList sortType={"mostRecent"} />
      <h2 className="font-bold mx-2 mt-2 ">Mas vendidos</h2>
      <ProductGalleryList sortType={"mostSold"} />
    </div>
  );
};
