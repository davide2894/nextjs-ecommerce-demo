"use server";

import { Cart, IProduct, ProductToAdd } from "@/lib/types";
import {
  addProductToCartInDB,
  createNewCartInDB,
  getCartFromDB,
} from "@/lib/db/cart";

export async function getCart(): Promise<Cart> {
  let cart = await getCartFromDB();
  if (!cart) {
    cart = await createNewCartInDB();
  }
  return cart;
}

export async function addProductToCartAction(product: IProduct) {
  let cart = await getCart();
  const cartAfterAddingProduct = await addProductToCartInDB(product, cart.id);
  return cartAfterAddingProduct;
}
