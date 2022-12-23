import React from "react";

export const Footer = () => {
  return (
    <div className="flex flex-col items-center text-light bg-dark p-4 w-full">
      <p className="font-gothic cursor-pointer">TUARK</p>
      <div className="my-3">
        <i className="fa-brands fa-instagram mx-2 cursor-pointer" />
        <i className="fa-brands fa-twitter mx-2 cursor-pointer" />
        <i className="fa-brands fa-square-facebook mx-2 cursor-pointer" />
      </div>
      <p>Todos los derechos reservados</p>
    </div>
  );
};
