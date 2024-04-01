import { ICartProduct, IProduct } from "@/lib/types";
import React from "react";

interface RemoveProductButtonProps {
  product: IProduct | ICartProduct;
  removeCallback: () => void;
}

function RemoveProductButton({
  product,
  removeCallback,
}: RemoveProductButtonProps) {
  return <Button onClick={removeCallback}>RemoveProductButton</Button>;
}

export default RemoveProductButton;
