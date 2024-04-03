"use server";

import { Cart, IProduct } from "@/lib/types";
import {
  addProductToCartInDB,
  createNewCartInDB,
  decrementCartItemQuantityByOneDbQuery,
  getExistingCartFromDB,
  incrementCartItemQuantityByOneDbQuery,
  removeCartItemDbQuery,
} from "@/db/queries/cart";
import { getLocalCartId, storeCartIdLocally } from "@/lib/localCart";
import { cookies } from "next/headers";

export async function addProductToCartAction(product: IProduct) {
  let cart = (await getCart()) || (await createCart());
  await addProductToCartInDB(product, cart.id);
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

export async function getCart(): Promise<Cart | undefined> {
  const localCartId: string = getLocalCartId();

  if (localCartId) {
    return await getExistingCartFromDB(localCartId);
  }
}

export async function createCart(): Promise<Cart> {
  const newCart = await createNewCartInDB();
  storeCartIdLocally(newCart.id);
  cookies().set("cartId", newCart.id);
  return newCart;
}
