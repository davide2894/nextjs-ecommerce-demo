import prisma from "../setup";

export default async function increaseCartItemQty(
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
}
