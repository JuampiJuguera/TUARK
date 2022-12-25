import { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";

export const useInitialState = () => {
  const [state, setState] = useState({ cart: [], products: [] });

  useEffect(() => {
    getCart();
    getIndumentary();
  }, []);

  function getIndumentary() {
    const indumentaryCollectionRef = collection(db, "indumentary");
    getDocs(indumentaryCollectionRef)
      .then((response) => {
        const indumentary = response.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setState({ ...state, products: [...indumentary] });
      })
      .catch((error) => console.log(error));
  }

  function getCart() {
    const cartCollectionRef = collection(db, "cart");
    getDocs(cartCollectionRef)
      .then((response) => {
        const cart = response.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setState({ ...state, cart: [...cart] });
      })
      .catch((error) => console.log(error));
  }

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id),
    });
  };

  const handleAddToCart = (event, product) => {
    event.preventDefault();
    addToCart(product);
  };

  return {
    addToCart,
    removeFromCart,
    state,
    handleAddToCart,
  };
};
