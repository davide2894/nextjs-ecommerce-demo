"use client";

import React from "react";
import Image from "next/image";
import { Button, IconButton } from "@mui/material";
import { ICartItem } from "@/lib/types";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import {
  decrementCartItemByOneAction,
  incrementCartItemByOneAction,
  removeCartItemAction,
} from "../../app/cart/actions/cartActions";
import decrementCartItemQuantityByOne from "@/lib/services/prisma/operations/decrementCartItemQuantityByOne";
import RemoveCartItemButton from "./RemoveCartItemButton";

interface CartItemtProps {
  item: ICartItem;
}

function CartItem({ item }: CartItemtProps) {
  async function onDecrementButtonClick() {
    if (item.cartId) {
      await decrementCartItemByOneAction(item.id, item.cartId);
    }
  }
  async function onIncrementButtonClick() {
    if (item.cartId) {
      await incrementCartItemByOneAction(item.id, item.cartId);
    }
  }
  async function removeCallback() {
    await removeCartItemAction(item.id);
  }
  console.log({
    productId: item.productId,
    itemQty: item.quantity,
    itemQtyGT0: item.quantity > 0,
  });

  return (
    <div>
      <Image src={item.thumbnail} width={200} height={200} alt={item.title} />
      <div className="cartItemInfo">
        <p>{item.title}</p>
        <p>{item.price}</p>
        <IconButton
          disabled={item.quantity === 1}
          aria-label="decrement quantity by 1"
          onClick={onDecrementButtonClick}>
          <RemoveIcon />
        </IconButton>
        <p>Qty: {item.quantity}</p>
        <IconButton
          aria-label="increment quantity by 1"
          onClick={onIncrementButtonClick}>
          <AddIcon />
        </IconButton>
      </div>
      <Button onClick={removeCallback}>Remove</Button>
    </div>
  );
}

export default CartItem;
