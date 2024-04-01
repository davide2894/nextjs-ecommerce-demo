import prisma from "../setup";

export default async function createCart() {
  return await prisma.cart.create({
    data: {},
  });
}
