import { revalidatePath } from "next/cache";
import prisma from "../setup";

export async function removeCartItem(cartItemId: string) {
  await prisma.cartItem.delete({
    where: {
      id: cartItemId,
    },
  });

  revalidatePath("/cart");
}
