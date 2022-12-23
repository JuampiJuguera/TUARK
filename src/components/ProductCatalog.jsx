import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Product } from "./Product";
import { useParams } from "react-router-dom";

const productTypeTitle = {
  all: "Todos los productos",
  tshirts: "Remeras",
  tanks: "Musculosas",
  hoodies: "Buzos",
  pants: "Pantalones",
};

export const ProductCatalog = () => {
  const { state, handleAddToCart } = useContext(AppContext);
  const { products } = state;
  let { productType } = useParams();

  return (
    <div className="w-full">
      <h2 className="text-center font-bold mb-2">
        {productTypeTitle[productType]}
      </h2>
      <div className="flex space-around flex-wrap justify-center">
        {products
          .filter(
            (product) => productType === "all" || product.type === productType
          )
          .map((product) => {
            return (
              <Product
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}
              />
            );
          })}
      </div>
    </div>
  );
};
