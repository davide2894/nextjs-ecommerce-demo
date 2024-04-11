"use server";

import { getProductsDbQuery } from "@/db/queries/product";
import { Product } from "@/lib/types";

export async function getProductsAction(query?: string): Promise<Product[]> {
  return query ? await getProductsDbQuery(query) : await getProductsDbQuery();
}
