import React from "react";
import { Link } from "react-router-dom";

const menuItems = {
  section: [
    {
      category: "Indumentaria",
      articles: [
        { articleTitle: "Remeras", articleType: "tshirts" },
        { articleTitle: "Musculosas", articleType: "tanks" },
        { articleTitle: "Pantalones", articleType: "pants" },
        { articleTitle: "Buzos", articleType: "hoodies" },
      ],
      id: 0,
    },
  ],
};

export const Menu = () => {
  return (
    <div className="w-full flex justify-center text-light absolute z-10">
      <div className=" bg-dark  w-11/12 pb-6">
        {menuItems.section.map((items) => {
          return (
            <div key={items.id}>
              <h1 className="mt-6 font-bold mx-2 border-solid border-light border-b-2 cursor-default">
                {items.category}
              </h1>
              {items.articles.map((item) => {
                return (
                  <Link
                    key={item.articleTitle}
                    to={`/catalog/${item.articleType}`}
                  >
                    <h2 className="my-2 mx-2 border-b">{item.articleTitle}</h2>
                  </Link>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
