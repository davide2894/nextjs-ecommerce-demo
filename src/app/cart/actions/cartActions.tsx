"use server";

import { Cart, IProduct } from "@/lib/types";
import {
  addProductToCartDbQuery,
  createNewCartDbQuery,
  decrementCartItemQuantityByOneDbQuery,
  getCart,
  incrementCartItemQuantityByOneDbQuery,
  removeCartItemDbQuery,
} from "@/db/queries/cart";
import { storeCartIdLocally } from "@/lib/localCart";
import { cookies } from "next/headers";

export async function addProductToCartAction(product: IProduct) {
  let cart = (await getCart()) || (await createCartAction());
  await addProductToCartDbQuery(product, cart.id);
}

export async function decrementCartItemByOneAction(
  cartItemId: string,
  cartId: string
) {
  await decrementCartItemQuantityByOneDbQuery(cartItemId, cartId);
}

export async function incrementCartItemByOneAction(
  cartItemId: string,
  cartId: string
) {
  await incrementCartItemQuantityByOneDbQuery(cartItemId, cartId);
}

export async function removeCartItemAction(cartItemId: string) {
  await removeCartItemDbQuery(cartItemId);
}

export async function createCartAction(): Promise<Cart> {
  const newCart = await createNewCartDbQuery();
  storeCartIdLocally(newCart.id);
  cookies().set("cartId", newCart.id);
  return newCart;
}
