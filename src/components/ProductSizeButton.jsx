import React from "react";

const buttonType = {
  active: "border-2 p-4 text-light border-dark bg-dark",
  inactive: "border-2 p-4 border-dark",
  noStock: "border-2 p-4 border-dark border-dashed",
};

export const ProductSizeButton = ({ product, handleSizeSelection, status }) => {
  <button
    value={product.size}
    name="size"
    onClick={(event) => handleSizeSelection(event, product.stock)}
    className={buttonType[status]}
  ></button>;
};
