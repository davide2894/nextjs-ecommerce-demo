import { getProductsFromDB, getProductFromDB } from "@/db/queries/product";
import { IProduct } from "@/lib/types";

export async function getProduct(id: string): Promise<IProduct> {
  return await getProductFromDB(id);
}
