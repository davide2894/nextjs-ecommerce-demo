"use client";

import { addProductToCartAction } from "@/app/cart/actions/cartActions";
import { IProduct } from "@/lib/types";
import { Button } from "@mui/material";
import React, { useTransition } from "react";

interface AddToCartButtonProps {
  product: IProduct;
}

function AddToCartButton({ product }: AddToCartButtonProps) {
  const [isPending, startTransition] = useTransition();

  function handleClick() {
    startTransition(async () => {
      await addProductToCartAction(product);
    });
  }

  console.log({ isPending });

  const color = isPending ? "lightgray" : "white";

  return (
    <Button
      variant="contained"
      sx={{ ...buttonStyle, color }}
      disabled={isPending}
      onClick={handleClick}
      aria-label={`Add ${product.title} to shopping bag`}>
      Add to bag
    </Button>
  );
}

const buttonStyle = {
  background: "black",
  marginTop: "20px",
};

export default AddToCartButton;
