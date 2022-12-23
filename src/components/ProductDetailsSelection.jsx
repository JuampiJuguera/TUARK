import React from "react";

export const ProductDetailsSelection = ({
  product,
  handleSizeSelection,
  handleQuantitySelection,
  productInfo,
}) => {
  return (
    <div>
      <h2 className="text-center my-1">TALLE</h2>
      <div className="flex justify-center">
        {product.sizes.map((item) => {
          return (
            <div className="mx-3 mt-2" key={item.size}>
              {item.stock > 0 ? (
                <div>
                  {" "}
                  <button
                    value={item.size}
                    name="size"
                    onClick={(event) => handleSizeSelection(event, item.stock)}
                    className="border-2 p-4 border-dark focus:bg-dark focus:text-light "
                  >
                    {item.size}
                  </button>
                </div>
              ) : (
                <button
                  disabled={true}
                  className="border-2 p-4 border-dark border-dashed"
                >
                  {item.size}
                </button>
              )}
            </div>
          );
        })}
      </div>
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
        <p>PRECIO FINAL: ${product.price * productInfo.price}</p>
      </div>
    </div>
  );
};
