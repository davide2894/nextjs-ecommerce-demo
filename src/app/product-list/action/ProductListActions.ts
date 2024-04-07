"use server";

import { getProductsFromDB } from "@/db/queries/product";
import { IProduct } from "@/lib/types";

export async function getProductsAction(query?: string): Promise<IProduct[]> {
  return query ? await getProductsFromDB(query) : await getProductsFromDB();
}
