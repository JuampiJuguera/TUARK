import React, { useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export const Information = () => {
  const { state, addToBuyer } = useContext(AppContext);
  const form = useRef(null);
  const navigate = useNavigate();

  const { cart } = state;

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = Object.fromEntries(formData);
    addToBuyer(buyer);
    navigate("/checkout/payment");
  };

  return (
    <div>
      <div>
        <div>
          <h2>Informacion de contacto:</h2>
        </div>
        <div>
          <form ref={form}>
            <input type="text" placeholder="Nombre Completo" name="name" />
            <input type="email" placeholder="Correo Electronico" name="email" />
            <input type="text" placeholder="Direccion" name="address" />
            <input type="text" placeholder="Apto" name="apto" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="Pais" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Codigo Postal" name="cp" />
            <input type="text" placeholder="Telefono" name="phone" />
          </form>
        </div>
      </div>
      <div>
        <h3>Pedido:</h3>
        <div>
          <div>
            <h4>Item Name</h4>
            <span>$10</span>
          </div>
        </div>
      </div>
      <Link to="/checkout">
        <div>Regresar</div>
      </Link>
      <div>
        <button type="button" onClick={handleSubmit}>
          Pagar
        </button>
      </div>
      <div>
        <h3>Pedido:</h3>
        {cart.map((item) => (
          <div key={item.title}>
            <h4>{item.title}</h4>
            <span>${item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
