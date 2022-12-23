import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const Payment = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;

  const paypalOptions = {
    clientId: "",
    intent: "capture",
    currency: "USD",
  };

  const buttonStyles = {
    layout: "vertical",
    shape: "rect",
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div>
      <div>
        <h3>Resumen del pedido:</h3>
        {cart.map((item) => (
          <div key={item.title}>
            <h4>{item.title}</h4>
            <span>{item.price}</span>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};
