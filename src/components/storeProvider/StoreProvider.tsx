"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from "@/lib/store";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function StoreProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <Header />
      {children}
      <Footer />
    </Provider>
  );
}

export default StoreProvider;
