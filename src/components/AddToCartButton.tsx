"use client";

import { addProductToCartAction } from "@/app/cart/actions/cartActions";
import { IProduct } from "@/lib/types";
import { IconButton } from "@mui/material";
import React, { useState, useTransition } from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

interface AddToCartButtonProps {
  product: IProduct;
}

function AddToCartButton({ product }: AddToCartButtonProps) {
  const [loading, setLoading] = useState(false);
  const [isPending, startTransition] = useTransition();

  function handleClick() {
    startTransition(async () => {
      await addProductToCartAction(product);
    });
  }

  console.log({ isPending });

  const color = isPending ? "lightgray" : "#000";

  return (
    <IconButton
      sx={{ color }}
      disabled={isPending}
      onClick={handleClick}
      aria-label={`Add ${product.title} to shopping bag`}>
      <ShoppingBagIcon />
    </IconButton>
  );
}

export default AddToCartButton;
