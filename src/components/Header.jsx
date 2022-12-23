import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { Menu } from "./Menu";

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { state } = useContext(AppContext);
  const { cart } = state;
  return (
    <div className="text-dark">
      <div className="flex justify-between mx-5 my-2 ">
        <i
          className="fa-solid fa-bars self-center text-2xl cursor-pointer"
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
        />
        <h1 className="font-bold text-2xl font-gothic">
          <Link to={"/"}>TUARK</Link>
        </h1>
        <div className="self-center w-4 relative">
          <Link to="/checkout">
            <i className="fa-solid fa-shopping-basket text-xl"></i>
          </Link>
          {cart.length > 0 && (
            <div className="bg-primaryColor rounded-full text-center text-light text-xs absolute top-3 -right-2.5 px-1 font-bold">
              {cart.length}
            </div>
          )}
        </div>
      </div>
      <div className="h-0.5 bg-dark w-11/12 m-auto" />
      {openMenu && <Menu></Menu>}
    </div>
  );
};
