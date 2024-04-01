import prisma from "../setup";

export default async function getCartItems(cartId: string) {
  return await prisma.cartItem.findMany({
    where: {
      cartId,
    },
  });
}
