import { Cart, ICartItem, IProduct } from "@/lib/types";
import { getLocalCartId, storeCartIdLocally } from "../../lib/localCart";
import getCartItems from "@/lib/services/prisma/operations/getCartItems";
import createCart from "@/lib/services/prisma/operations/createCart";
import incrementCartItemQuantityByOne from "@/lib/services/prisma/operations/incrementCartItemQuantityByOne";
import createCartItem from "@/lib/services/prisma/operations/createCartItem";
import getSingleCartItem from "@/lib/services/prisma/operations/getSingleCartItem";
import decrementCartItemQuantityByOne from "@/lib/services/prisma/operations/decrementCartItemQuantityByOne";
import { removeCartItem } from "@/lib/services/prisma/operations/removeCartItem";

export async function getCart(): Promise<Cart | undefined> {
  const localCartId: string = getLocalCartId();

  if (localCartId) {
    const items = await getCartItems(localCartId);
    const subTotal = calculateSubTotal(items);
    const totalQuantity = calculateTotalQuantity(items);
    return {
      id: localCartId,
      items,
      subTotal,
      totalQuantity,
    };
  }
}

export async function createNewCartDbQuery(): Promise<Cart> {
  const cart = await createCart();

  return {
    id: cart.id,
    items: [],
    subTotal: 0,
    totalQuantity: 0,
  };
}

export async function addProductToCartDbQuery(
  product: IProduct,
  cartId: string
) {
  const productInCart = await getSingleCartItem(product.id, cartId);

  if (productInCart) {
    await incrementCartItemQuantityByOne(productInCart.id, cartId);
  } else {
    await createCartItem(cartId, product);
  }
}

export async function decrementCartItemQuantityByOneDbQuery(
  cartItemId: string,
  cartId: string
) {
  await decrementCartItemQuantityByOne(cartItemId, cartId);
}

export async function incrementCartItemQuantityByOneDbQuery(
  cartItemId: string,
  cartId: string
) {
  await incrementCartItemQuantityByOne(cartItemId, cartId);
}

export async function removeCartItemDbQuery(cartItemId: string) {
  await removeCartItem(cartItemId);
}

function calculateSubTotal(cartItems: ICartItem[]) {
  return cartItems.reduce(
    (accumulatedSubTotal, currentCartItem) =>
      accumulatedSubTotal + currentCartItem.price * currentCartItem.quantity,
    0
  );
}

function calculateTotalQuantity(cartItems: ICartItem[]) {
  return cartItems.reduce(
    (accumulatedTotalQuantity, currentCartItem) =>
      accumulatedTotalQuantity + currentCartItem.quantity,
    0
  );
}
