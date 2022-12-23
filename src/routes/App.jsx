import React from "react";
import { Home } from "../containers/Home";
import { Checkout } from "../containers/Checkout";
import { Payment } from "../containers/Payment";
import { Information } from "../containers/Information";
import { Success } from "../containers/Success";
import { NotFound } from "../containers/NotFound";
import { Layout } from "../components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { useInitialState } from "../hooks/useInitialState";
import { ProductCatalog } from "../components/ProductCatalog";
import { ProductPage } from "../containers/ProductPage.jsx";

export const App = () => {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              exact
              path="/catalog/:productType"
              element={<ProductCatalog />}
            />
            <Route
              exact
              path="/catalog/:productType/:productId"
              element={<ProductPage />}
            />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route
              exact
              path="/checkout/information"
              element={<Information />}
            />
            <Route exact path="/checkout/payment" element={<Payment />} />
            <Route exact path="/checkout/success" element={<Success />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};
