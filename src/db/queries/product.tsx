import { Product } from "../../lib/types";
import prisma from "../../lib/services/prisma/setup";
import log from "@/lib/log";

export async function getProductsFromDB(): Promise<Product[]> {
  return await prisma.product.findMany();
}

export async function getProductFromDB(id: string): Promise<Product> {
  log({ scope: "getProductFromDB", id });
  return await prisma.product.findUniqueOrThrow({
    where: {
      id,
    },
  });
}
