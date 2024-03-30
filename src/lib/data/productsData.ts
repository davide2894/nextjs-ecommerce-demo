import { API } from "@/lib/constants";
import { IProduct } from "@/lib/types";

export function getProducts(): Promise<IProduct[]> {
  return fetch(
    `${API.PROTOCOL}://${API.DOMAIN}/${API.PATH.PRODUCT}?${API.QUERY_PARAMS.LIMIT}=2`,
    {
      cache: "force-cache",
    }
  )
    .then((res) => res.json())
    .then((res) => res.products);
}

export function getProduct(id: string): Promise<IProduct> {
  return fetch(`${API.PROTOCOL}://${API.DOMAIN}/${API.PATH.PRODUCT}/${id}`, {
    cache: "force-cache",
  })
    .then((res) => res.json())
    .then((res) => res);
}
