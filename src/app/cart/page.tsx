import React from "react";
import { redirect } from "next/navigation";
import CartItem from "./CartItem";
import { getCart } from "@/db/queries/cart";
import { Button } from "@mui/material";
import Link from "next/link";
import getCartItems from "@/lib/services/prisma/operations/getCartItems";

interface CartPageProps {
  searchParams: string;
}

async function CartPage() {
  console.log("---------------------------");
  console.log("cart page");
  const cart = await getCart();

  if (!cart) {
    redirect("/");
  }

  return (
    <div>
      <div className="cartProducts">
        {cart.items &&
          cart.items.map((cartItem) => (
            <CartItem item={cartItem} key={cartItem.id} />
          ))}
        <hr />
        <div className="subtotal">
          <p>Subtotal</p>
          <p>{cart.subTotal}</p>
          <p className="disclaimer">
            Shipping and taxes calculated at checkout
          </p>
        </div>
        <div className="cartActions">
          <Button>Checkout</Button>
          <div>
            <span>or</span>
            <Link href="/">Continue Shopping</Link>-
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
