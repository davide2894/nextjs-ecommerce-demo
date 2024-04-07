import { getProductDbQuery } from "@/db/queries/product";
import { Product } from "@/lib/types";

export async function getProductAction(id: string): Promise<Product> {
  return await getProductDbQuery(id);
}
