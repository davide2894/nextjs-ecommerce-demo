import React from "react";
import { ICartProduct } from "@/lib/types";
import Image from "next/image";
import { Button } from "@mui/material";

interface CartProductProps {
  product: ICartProduct;
}

function CartProduct({ product }: CartProductProps) {
  return (
    <div>
      <Image
        src={product.thumbnail}
        width={200}
        height={200}
        alt={product.title}
      />
      <div className="cartProductInfo">
        <p>{product.title}</p>
        <p>{product.price}</p>
        <p>Qty: {product.quantity}</p>
      </div>
      {/* <RemoveProductButton product={product} removeCallback={} /> */}
    </div>
  );
}

export default CartProduct;
