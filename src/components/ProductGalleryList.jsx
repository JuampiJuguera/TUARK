import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Product } from "./Product";

const sortProducts = (products, sortType) => {
  switch (sortType) {
    case "mostRecent":
      return [...products].sort((a, b) => b.date - a.date).slice(0, 6);
    case "mostSold":
      return [...products].sort((a, b) => b.sells - a.sells).slice(0, 6);
    default:
      return products;
  }
};

export const ProductGalleryList = ({ sortType }) => {
  const { state, handleAddToCart } = useContext(AppContext);
  const { products } = state;

  return (
    <div className="w-full">
      <div className="flex space-around  overflow-scroll">
        {sortProducts(products, sortType).map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};
