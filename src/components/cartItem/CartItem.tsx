"use client";

import React, { useTransition } from "react";
import Image from "next/image";
import { Box, Button, IconButton, Typography } from "@mui/material";
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
import { isPending } from "@reduxjs/toolkit";
import DeleteIcon from "@mui/icons-material/Delete";

interface CartItemtProps {
  item: ICartItem;
}

function CartItem({ item }: CartItemtProps) {
  const [isPending, startTransition] = useTransition();

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

  function removeCallback() {
    startTransition(async () => {
      await removeCartItemAction(item.id);
    });
  }

  console.log({
    productId: item.productId,
    itemQty: item.quantity,
    itemQtyGT0: item.quantity > 0,
  });

  return (
    <Box sx={boxStyle}>
      <Box>
        <Image
          style={cartItemImage}
          src={item.thumbnail}
          width={200}
          height={200}
          alt={item.title}
        />
      </Box>
      <Box sx={cartItemInfo}>
        <Box sx={cartItemNamePrice}>
          <Typography>{item.title}</Typography>
          <Typography fontWeight="bold">
            € {item.price * item.quantity}
          </Typography>
        </Box>
        <Box sx={cartItemActions}>
          <Box>
            <IconButton
              disabled={isPending}
              aria-label="Remove item from cart"
              onClick={removeCallback}>
              <DeleteIcon />
            </IconButton>
          </Box>
          <Box sx={cartItemQuantity}>
            <IconButton
              disabled={item.quantity === 1}
              aria-label="decrement quantity by 1"
              onClick={onDecrementButtonClick}>
              <RemoveIcon />
            </IconButton>
            <Typography>{item.quantity}</Typography>
            <IconButton
              sx={increaseQuantityButton}
              aria-label="increment quantity by 1"
              onClick={onIncrementButtonClick}>
              <AddIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const boxStyle = {
  display: "flex",
  margin: "10px auto",
  borderTop: "1px solid lightgray",
  paddingTop: "10px",
};
const cartItemImage = {
  borderRadius: "5px",
  marginRight: "20px",
};

const cartItemInfo = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "100%",
};

const cartItemNamePrice = {
  marginTop: "20px",
  display: "flex",
  justifyContent: "space-between",
};

const cartItemActions = {
  display: "flex",
  justifyContent: "space-between",
};

const cartItemQuantity = {
  display: "flex",
  alignItems: "center",
};

const increaseQuantityButton = {
  paddingRight: 0,
};

export default CartItem;
