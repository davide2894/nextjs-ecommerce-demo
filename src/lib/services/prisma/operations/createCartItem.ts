import { Product } from "@/lib/types";
import prisma from "../setup";
import { revalidatePath } from "next/cache";

export default async function createCartItem(cartId: string, product: Product) {
  await prisma.cart.update({
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

  revalidatePath("/cart");
}
