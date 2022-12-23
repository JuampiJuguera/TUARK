import React from "react";

export const ProductDetails = ({ product }) => {
  return (
    <div>
      <img className="w-full m-auto" src={product.img}></img>
      <div className="w-full h-0.5 m-auto my-4 bg-dark" />
      <div>
        <div className="text-center text-xl my-2">
          <h1>{product.title}</h1>
          <h2 className="my-2">
            Precio: <span className="font-bold">${product.price}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};
