"use client";

import React, { useTransition } from "react";
import Image from "next/image";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { ICartItem } from "@/lib/types";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import {
  decrementCartItemByOneAction,
  incrementCartItemByOneAction,
  removeCartItemAction,
} from "../../app/cart/actions/cartActions";
import DeleteIcon from "@mui/icons-material/Delete";

interface CartItemtProps {
  item: ICartItem;
}

function CartItem({ item }: CartItemtProps) {
  const [isPending, startTransition] = useTransition();

  function onDecrementButtonClick() {
    if (item.cartId) {
      startTransition(async () => {
        await decrementCartItemByOneAction(item.id, item.cartId!);
      });
    }
  }

  function onIncrementButtonClick() {
    if (item.cartId) {
      startTransition(async () => {
        await incrementCartItemByOneAction(item.id, item.cartId!);
      });
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
    <Stack
      direction="row"
      margin="10px auto"
      borderTop="1px solid lightgray"
      paddingTop="10px">
      <Box>
        <Image
          style={cartItemImage}
          src={item.thumbnail}
          width={200}
          height={200}
          alt={item.title}
        />
      </Box>
      <Stack justifyContent="space-between" width="100%">
        <Stack direction="row" justifyContent="space-between" marginTop="20px">
          <Typography>{item.title}</Typography>
          <Typography fontWeight="bold" marginRight="10px">
            € {item.price * item.quantity}
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Box>
            <IconButton
              disabled={isPending}
              aria-label="Remove item from cart"
              onClick={removeCallback}>
              <DeleteIcon />
            </IconButton>
          </Box>
          <Stack direction="row" alignItems="center">
            <IconButton
              disabled={item.quantity === 1 || isPending}
              aria-label="decrement quantity by 1"
              onClick={onDecrementButtonClick}>
              <RemoveIcon />
            </IconButton>
            <Typography>{item.quantity}</Typography>
            <IconButton
              disabled={isPending}
              aria-label="increment quantity by 1"
              onClick={onIncrementButtonClick}>
              <AddIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

const cartItemImage = {
  borderRadius: "5px",
  marginRight: "20px",
};

export default CartItem;
