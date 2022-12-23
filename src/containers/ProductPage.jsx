import React, { useContext, useState } from "react";
import { ProductDetails } from "../components/ProductDetails";
import { ProductDetailsSelection } from "../components/ProductDetailsSelection";
import { AppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";

export const ProductPage = () => {
  const { state } = useContext(AppContext);
  const { products } = state;

  //ESTADOS
  const [productInfo, setProductInfo] = useState({
    displayStock: false,
    stockQuantity: 0,
    price: 0,
    size: "",
  });

  let { productId } = useParams();

  const product = products.find((product) => product.id === productId);

  //FUNCIONES

  const handleSizeSelection = (event, stock) => {
    event.preventDefault();
    setProductInfo({
      displayStock: true,
      stockQuantity: stock,
      price: 0,
      size: event.target.value,
    });
    const quantityInput = document.querySelector("#quantity");
    quantityInput.value = 0;
  };

  const handleQuantitySelection = (event) => {
    setProductInfo({
      ...productInfo,
      price: event.target.value,
    });
  };

  return (
    <div>
      {product && (
        <form>
          <div className="w-9/12 m-auto">
            <ProductDetails product={product} />
            <ProductDetailsSelection
              product={product}
              handleSizeSelection={handleSizeSelection}
              handleQuantitySelection={handleQuantitySelection}
              productInfo={productInfo}
            />
            <div className="w-full flex justify-center mt-8">
              <button
                type="submit"
                className="bg-dark text-light p-3 rounded-full"
              >
                AGREGAR AL CARRITO
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};
