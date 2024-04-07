import { getProductsFromDB, getProductFromDB } from "@/db/queries/product";
import { IProduct } from "@/lib/types";

export async function getProducts(query?: string): Promise<IProduct[]> {
  return query ? await getProductsFromDB(query) : await getProductsFromDB();
}

export async function getProduct(id: string): Promise<IProduct> {
  return await getProductFromDB(id);
}
