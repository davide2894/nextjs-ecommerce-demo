import { revalidatePath } from "next/cache";
import prisma from "../setup";

export default async function incrementCartItemQuantityByOne(
  cartItemId: string,
  cartId: string
) {
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
              increment: 1,
            },
          },
        },
      },
    },
  });

  revalidatePath("/cart");
}
