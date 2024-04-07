"use server";

import { getProductsFromDB } from "@/db/queries/product";
import { Product } from "@/lib/types";

export async function getProductsAction(query?: string): Promise<Product[]> {
  return query ? await getProductsFromDB(query) : await getProductsFromDB();
}
