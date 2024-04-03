import { IProduct } from "../../lib/types";
import prisma from "../../lib/services/prisma/setup";
import log from "@/lib/log";

export async function getProductsFromDB(): Promise<IProduct[]> {
  return await prisma.product.findMany();
}

export async function getProductFromDB(id: string): Promise<IProduct> {
  log({ scope: "getProductFromDB", id });
  return await prisma.product.findUniqueOrThrow({
    where: {
      id,
    },
  });
}
