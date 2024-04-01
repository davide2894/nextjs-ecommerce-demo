import React from "react";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Link from "next/link";

interface IShoppingBagProps {
  numberOfItems: number;
}

function ShoppingBag({ numberOfItems }: IShoppingBagProps) {
  return (
    <div>
      <Link href="/cart">
        <LocalMallIcon />
        <span>{numberOfItems}</span>
      </Link>
    </div>
  );
}

export default ShoppingBag;
