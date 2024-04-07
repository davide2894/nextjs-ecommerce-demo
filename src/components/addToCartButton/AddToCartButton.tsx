"use client";

import { addProductToCartAction } from "@/app/cart/actions/cartActions";
import log from "@/lib/log";
import { Product } from "@/lib/types";
import { Button } from "@mui/material";
import React, { useTransition } from "react";

interface AddToCartButtonProps {
  product: Product;
}

function AddToCartButton({ product }: AddToCartButtonProps) {
  const [isPending, startTransition] = useTransition();

  function handleClick() {
    startTransition(async () => {
      await addProductToCartAction(product);
    });
  }

  return (
    <Button
      variant="contained"
      disabled={isPending}
      onClick={handleClick}
      aria-label={`Add ${product.title} to shopping bag`}>
      Add to bag
    </Button>
  );
}

export default AddToCartButton;
