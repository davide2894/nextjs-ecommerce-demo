import { revalidatePath } from "next/cache";
import prisma from "../setup";

export async function removeCartItem(cartItemId: string) {
  console.log("-------------------------");
  console.log("removeCartItem");
  console.log({ cartItemId });
  await prisma.cartItem.delete({
    where: {
      id: cartItemId,
    },
  });

  revalidatePath("/cart");
}
