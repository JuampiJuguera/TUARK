import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = (product) => () => {
    removeFromCart(product);
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
        {cart.length > 0 ? (
          <h3 className="font-bold text-xl">Lista de pedidos:</h3>
        ) : (
          <h3>Sin pedidos</h3>
        )}
        {cart.map((item) => (
          <div>
            <div className="flex my-4">
              <img className="w-14" src={item.img} />
              <div>
                <h4 className="font-bold">{item.title}</h4>
                <p>${item.price}</p>
                <button type="button" onClick={handleRemove(item)}>
                  <i className="fas fa-trash-alt bg-red" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div>
          <h3>{`Precio Total: $ ${handleSumTotal()}`}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar Pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
};
