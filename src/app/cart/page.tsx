import React from "react";
import { redirect } from "next/navigation";
import CartProduct from "./CartProduct";
import { getCart } from "./actions/cartActions";
import { Button } from "@mui/material";
import Link from "next/link";

interface CartPageProps {
  searchParams: string;
}

async function CartPage() {
  const cart = await getCart();
  console.log({ cart });
  if (!cart) {
    redirect("/");
  }

  return (
    <div>
      <div className="cartProducts">
        {cart.products &&
          cart.products.map((product) => (
            <CartProduct product={product} key={product.id} />
          ))}
        <hr />
        <div className="subtotal">
          <p>Subtotal</p>
          <p>{cart.total}</p>
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
