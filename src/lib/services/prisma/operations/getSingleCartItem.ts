import prisma from "../setup";

export default async function getSingleCartItem(
  productId: string,
  cartId: string
) {
  return await prisma.cartItem.findFirst({
    where: {
      productId,
      cartId,
    },
  });
}
