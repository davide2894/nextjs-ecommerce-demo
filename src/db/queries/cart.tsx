import { API } from "@/lib/constants";
import { useAppSelector } from "@/customHooks/useAppSelector";
import { Cart, ICartItem, IProduct, ProductToAdd } from "@/lib/types";
import prisma from "../../lib/services/prisma/setup";
import { cookies } from "next/headers";
import CartPage from "@/app/cart/page";
import { getLocalCartId, storeCartIdLocally } from "../../lib/localCart";
import getCartItems from "@/lib/services/prisma/operations/getCartItems";
import createCart from "@/lib/services/prisma/operations/createCart";
import increaseCartItemQty from "@/lib/services/prisma/operations/increaseCartItemQty";
import createCartItem from "@/lib/services/prisma/operations/createCartItem";
import getSingleCartItem from "@/lib/services/prisma/operations/getSingleCartItem";

function calculateSubTotal(cartItems: ICartItem[]) {
  return cartItems.reduce(
    (accumulatedSubTotal, currentCartItem) =>
      accumulatedSubTotal + currentCartItem.price * currentCartItem.quantity,
    0
  );
}

async function getExistingCartFromDB(cartId: string): Promise<Cart> {
  const items = await getCartItems(cartId);
  const subTotal = calculateSubTotal(items);
  return {
    id: cartId,
    items,
    subTotal,
  };
}

async function createNewCartInDB(): Promise<Cart> {
  const cart = await createCart();

  storeCartIdLocally(cart.id);

  return {
    id: cart.id,
    items: [],
    subTotal: 0,
  };
}

export async function getCart(): Promise<Cart> {
  const localCartId: string = getLocalCartId();

  if (localCartId) {
    return await getExistingCartFromDB(localCartId);
  } else {
    return await createNewCartInDB();
  }
}

export async function addProductToCartInDB(product: IProduct, cartId: string) {
  const productInCart = await getSingleCartItem(product.id, cartId);

  if (productInCart) {
    await increaseCartItemQty(productInCart.id, cartId);
  } else {
    await createCartItem(cartId, product);
  }
}
