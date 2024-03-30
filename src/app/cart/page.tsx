import React from "react";
import { ProductToAdd } from "@/lib/types";
import { getCart } from "@/lib/data/cartData";
import { redirect } from "next/navigation";
import CartProduct from "./CartProduct";
import ProductCard from "@/components/ProductCard";
import { Button } from "@mui/material";
import Link from "next/link";

interface CartPageProps {
  searchParams: string;
}

async function CartPage({ searchParams }: any) {
  console.log({ searchParams });
  const cart = await getCart(searchParams);
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
