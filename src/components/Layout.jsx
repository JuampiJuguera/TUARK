import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <div>
      <Header className="w-full" />
      <div className="flex justify-center my-10">{children}</div>
      <Footer className="w-full" />
    </div>
  );
};
