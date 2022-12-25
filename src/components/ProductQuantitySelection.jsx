import React from "react";

export const ProductQuantitySelection = ({
  productInfo,
  handleQuantitySelection,
  product,
}) => {
  const totalPrice = product.price * productInfo.quantity;
  return (
    <>
      <h2 className="text-center mt-2">
        STOCK:{" "}
        {productInfo.stockQuantity > 0 ? productInfo.stockQuantity : null}
      </h2>
      <div className="mt-4 flex flex-col items-center">
        <h2>CANTIDAD</h2>
        <input
          className="w-3/12 pl-2 mb-4 bg-dark text-light placeholder:text-light"
          placeholder="-"
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          max={productInfo.stockQuantity}
          onChange={(event) => handleQuantitySelection(event)}
        />
        <p>PRECIO FINAL: ${isNaN(totalPrice) ? 0 : totalPrice}</p>
      </div>
    </>
  );
};
