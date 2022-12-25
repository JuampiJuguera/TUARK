import React, { useState } from "react";
import { ProductQuantitySelection } from "./ProductQuantitySelection";
import { ProductSizeSelectionButton } from "./ProductSizeSelectionButton";

export const ProductSizeQuantitySelection = ({
  product,
  handleSizeSelection,
  handleQuantitySelection,
  productInfo,
  buttonStatus,
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
                  <ProductSizeSelectionButton
                    handleSizeSelection={handleSizeSelection}
                    status={item.size === buttonStatus ? "active" : "inactive"}
                    product={item}
                  />
                </div>
              ) : (
                <ProductSizeSelectionButton
                  handleSizeSelection={handleSizeSelection}
                  status={"noStock"}
                  product={item}
                />
              )}
            </div>
          );
        })}
      </div>
      <ProductQuantitySelection
        product={product}
        handleQuantitySelection={handleQuantitySelection}
        productInfo={productInfo}
      />
    </div>
  );
};
