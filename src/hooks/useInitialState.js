import { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";

export const useInitialState = () => {
  useEffect(() => {
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
        setState({ cart: [], buyer: [], products: [...indumentary] });
      })
      .catch((error) => console.log(error));
  }

  const [state, setState] = useState({ cart: [], buyer: [], products: [] });

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

  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload],
    });
  };

  const handleAddToCart = (product) => () => {
    addToCart(product);
  };

  return {
    addToCart,
    removeFromCart,
    addToBuyer,
    state,
    handleAddToCart,
  };
};
