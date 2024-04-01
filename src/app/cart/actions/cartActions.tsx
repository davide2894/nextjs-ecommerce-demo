"use server";

import { IProduct } from "@/lib/types";
import { addProductToCartInDB, getCart } from "@/db/queries/cart";

export async function addProductToCartAction(product: IProduct) {
  let cart = await getCart();
  await addProductToCartInDB(product, cart.id);
}
