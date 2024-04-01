import React from "react";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Link from "next/link";

interface IShoppingBagProps {
  numberOfItems: number;
}

function ShoppingBag({ numberOfItems }: IShoppingBagProps) {
  return (
    <div>
      <Link href="/cart">
        <ShoppingBagOutlinedIcon />
        <span>{numberOfItems}</span>
      </Link>
    </div>
  );
}

export default ShoppingBag;
