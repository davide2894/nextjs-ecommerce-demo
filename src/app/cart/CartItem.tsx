import React from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import { ICartItem } from "@/lib/types";

interface CartProductProps {
  item: ICartItem;
}

function CartItem({ item }: CartProductProps) {
  return (
    <div>
      <Image src={item.thumbnail} width={200} height={200} alt={item.title} />
      <div className="cartItemInfo">
        <p>{item.title}</p>
        <p>{item.price}</p>
        <p>Qty: {item.quantity}</p>
      </div>
      {/* <RemoveProductButton product={product} removeCallback={} /> */}
    </div>
  );
}

export default CartItem;
