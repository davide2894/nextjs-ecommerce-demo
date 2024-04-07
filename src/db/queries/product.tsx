import { IProduct } from "../../lib/types";
import prisma from "../../lib/services/prisma/setup";
import log from "@/lib/log";

export async function getProductsFromDB(query?: string): Promise<IProduct[]> {
  if (query && query.length) {
    return await prisma.product.findMany({
      where: {
        title: {
          contains: query,
          mode: "insensitive",
        },
      },
    });
  } else {
    return await prisma.product.findMany();
  }
}

export async function getProductFromDB(id: string): Promise<IProduct> {
  log({ scope: "getProductFromDB", id });
  return await prisma.product.findUniqueOrThrow({
    where: {
      id,
    },
  });
}
