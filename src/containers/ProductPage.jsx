import React, { useContext, useState } from "react";
import { ProductSizeQuantitySelection } from "../components/ProductSizeQuantitySelection";
import { ProductDetails } from "../components/ProductDetails";
import { AppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";

export const ProductPage = () => {
  const { state } = useContext(AppContext);
  const { products, handleAddToCart } = state;

  //ESTADOS
  const [productInfo, setProductInfo] = useState({
    displayStock: false,
    stockQuantity: 0,
    price: 0,
    size: "",
  });

  const [buttonStatus, setButtonStatus] = useState("");

  let { productId } = useParams();

  const product = products.find((product) => product.id === productId);

  //FUNCIONES

  const handleSizeSelection = (event, stock) => {
    event.preventDefault();
    setProductInfo({
      displayStock: true,
      stockQuantity: stock,
      quantity: 0,
      size: event.target.value,
    });
    setButtonStatus(event.target.value);
  };

  const handleQuantitySelection = (event) => {
    setProductInfo({
      ...productInfo,
      quantity: event.target.value,
    });
  };

  return (
    <div>
      {product && (
        <form>
          <div className="w-9/12 m-auto">
            <ProductDetails product={product} />
            <ProductSizeQuantitySelection
              product={product}
              handleSizeSelection={handleSizeSelection}
              handleQuantitySelection={handleQuantitySelection}
              productInfo={productInfo}
              buttonStatus={buttonStatus}
            />
            <div className="w-full flex justify-center mt-8">
              <button
                type="button"
                className="bg-dark text-light p-3 rounded-full"
                onClick={console.log(productInfo.stockQuantity)}
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
