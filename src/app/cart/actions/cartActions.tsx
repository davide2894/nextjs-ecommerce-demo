"use server";

import { ICartItem, IProduct } from "@/lib/types";
import {
  addProductToCartInDB,
  decrementCartItemQuantityByOneDbQuery,
  getCart,
  incrementCartItemQuantityByOneDbQuery,
  removeCartItemDbQuery,
} from "@/db/queries/cart";

export async function addProductToCartAction(product: IProduct) {
  let cart = await getCart();
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
