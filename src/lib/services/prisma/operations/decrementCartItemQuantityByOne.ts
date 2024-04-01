import { revalidatePath } from "next/cache";
import prisma from "../setup";

export default async function decrementCartItemQuantityByOne(
  cartItemId: string,
  cartId: string
) {
  console.log({
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
