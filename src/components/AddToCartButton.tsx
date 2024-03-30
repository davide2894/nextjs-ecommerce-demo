"use client";

import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { addItemToShoppingBag } from "@/lib/shoppingBag/shoppingBagSlice";

interface AddToCartButtonProps {
  productId: number;
}

function AddToCartButton({ productId }: AddToCartButtonProps) {
  const dispatch = useDispatch();

  function handleClick() {
    console.log(`calling dispatch(addItemToShoppingBag(${productId}))`);
    dispatch(addItemToShoppingBag(productId));
  }
  return <Button onClick={handleClick}>Add to bag</Button>;
}

export default AddToCartButton;
