import { Product } from "../../lib/types";
import prisma from "../../lib/services/prisma/setup";
import log from "@/lib/log";

export async function getProductsDbQuery(query?: string): Promise<Product[]> {
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

export async function getProductDbQuery(id: string): Promise<Product> {
  log({ scope: "getProductFromDB", id });
  return await prisma.product.findUniqueOrThrow({
    where: {
      id,
    },
  });
}
