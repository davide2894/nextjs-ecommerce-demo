import React from "react";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Link from "next/link";
import ShoppingBagCounter from "./shoppingBag/ShoppingBagCounter";
import { useAppSelector } from "@/customHooks/useAppSelector";

function ShoppingBag() {
  const shoppingBag = useAppSelector((state) => state.shoppingBagReducer);
  return (
    <div>
      <Link href="/cart">
        <LocalMallIcon />
        <ShoppingBagCounter />
      </Link>
    </div>
  );
}

export default ShoppingBag;
