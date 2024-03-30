"use client";

import React from "react";
import { useAppSelector } from "@/customHooks/useAppSelector";

function ShoppingBagCounter() {
  const shoppingBagCount = useAppSelector(
    (state) => state.shoppingBagReducer
  ).length;

  return <span>{shoppingBagCount ? shoppingBagCount : 0}</span>;
}

export default ShoppingBagCounter;
