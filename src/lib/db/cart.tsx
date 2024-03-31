import { API } from "@/lib/constants";
import { useAppSelector } from "@/customHooks/useAppSelector";
import { Cart, IProduct, ProductToAdd } from "@/lib/types";
import prisma from "./prismaUtils";
import { cookies } from "next/headers";
import CartPage from "@/app/cart/page";
import { getLocalCartId, storeCartIdLocally } from "./localCart";

export async function getCartFromDB(): Promise<Cart | null> {
  const localCartId = getLocalCartId();

  if (!localCartId) {
    return null;
  }

  const items = await prisma.cartItem.findMany({
    where: {
      cartId: localCartId,
    },
  });

  console.log(items);

  return {
    localCartId,
    items,
  };
}

export async function createNewCartInDB(): Promise<Cart> {
  const cart = await prisma.cart.create({
    data: {},
  });

  const localCartId = storeCartIdLocally(cart.id);

  return {
    localCartId,
    items: [],
  };
}

export async function addProductToCartInDB(
  product: IProduct,
  cartId: string
): Promise<Cart> {
  const productInCart = await prisma.cartItem.findFirst({
    where: {
      productId: product.id,
      cartId,
    },
  });

  console.log({
    productId: product.id,
    cartId,
    productInCart,
  });

  if (productInCart) {
    console.log("updating existing item qty (+1) in cart...");
    return await prisma.cart.update({
      where: {
        id: cartId,
      },
      data: {
        items: {
          update: {
            where: {
              id: productInCart.id,
              productId: product.id,
            },
            data: {
              quantity: {
                increment: 1,
              },
            },
          },
        },
      },
    });
  } else {
    console.log("adding current item to cart");
    const updateCartDB = await prisma.cart.update({
      where: {
        id: cartId,
      },
      data: {
        items: {
          create: {
            productId: product.id,
            quantity: 1,
            title: product.title,
            price: product.price,
            discountPercentage: product.discountPercentage,
            thumbnail: product.thumbnail,
          },
        },
      },
    });
    console.log({ updateCartDB });
    return updateCartDB;
  }
}
