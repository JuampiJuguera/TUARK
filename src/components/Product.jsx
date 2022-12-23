import React from "react";
import { Link } from "react-router-dom";

export const Product = ({ product, handleAddToCart }) => {
  return (
    <div className="m-2">
      <div className="shadow-md w-44 flex flex-col content-center">
        <div className="relative">
          <img src={product.img} alt={product.title} />
          <Link to={`/catalog/${product.type}/${product.id}`}>
            <i className="fa-solid fa-bag-shopping absolute bottom-5 left-16 py-2 px-5 bg-light rounded-full shadow-lg" />
          </Link>
        </div>
        <div className="text-center mb-2">
          <h2 className="font-bold text-sm">{product.title}</h2>
          <h3>${product.price}</h3>
        </div>
      </div>
    </div>
  );
};
