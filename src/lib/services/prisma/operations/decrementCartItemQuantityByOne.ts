import { revalidatePath } from "next/cache";
import prisma from "../setup";
import log from "@/lib/log";

export default async function decrementCartItemQuantityByOne(
  cartItemId: string,
  cartId: string
) {
  log({
    cartItemId,
    cartId,
  });

  await prisma.cart.update({
    where: {
      id: cartId,
    },
    data: {
      items: {
        update: {
          where: {
            id: cartItemId,
          },
          data: {
            quantity: {
              decrement: 1,
            },
          },
        },
      },
    },
  });

  revalidatePath("/cart");
}
