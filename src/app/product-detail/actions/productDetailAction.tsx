import { getProductsFromDB, getProductFromDB } from "@/db/queries/product";
import { Product } from "@/lib/types";

export async function getProducts(): Promise<Product[]> {
  return await getProductsFromDB();
}

export async function getProduct(id: string): Promise<Product> {
  return await getProductFromDB(id);
}
