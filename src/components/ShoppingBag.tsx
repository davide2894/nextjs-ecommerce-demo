"use client";

import React from "react";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Link from "next/link";
import ShoppingBagCounter from "./shoppingBag/ShoppingBagCounter";
import { useAppSelector } from "@/customHooks/useAppSelector";

function ShoppingBag() {
  const shoppingBag = useAppSelector((state) => state.shoppingBagReducer);
  console.log({ shoppingBag });
  return (
    <div>
      <Link
        href={{
          pathname: "/cart",
          query: {
            userId: 1,
            proudcts: JSON.stringify(shoppingBag),
          },
        }}>
        <LocalMallIcon />
        <ShoppingBagCounter />
      </Link>
    </div>
  );
}

export default ShoppingBag;
