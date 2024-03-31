"use client";

import { addProductToCartAction } from "@/app/cart/actions/cartActions";
import { IProduct } from "@/lib/types";
import { Button } from "@mui/material";
import React, { useState } from "react";

interface AddToCartButtonProps {
  product: IProduct;
}

function AddToCartButton({ product }: AddToCartButtonProps) {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    await addProductToCartAction(product);
  }
  return <Button onClick={handleClick}>Add to bag</Button>;
}

export default AddToCartButton;
