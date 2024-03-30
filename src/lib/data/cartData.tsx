import { API } from "@/lib/constants";
import { useAppSelector } from "@/customHooks/useAppSelector";
import { Cart, ProductToAdd } from "@/lib/types";

export async function getCart(param: any): Promise<Cart> {
  console.log("calling cart route");
  console.log({ param });
  return fetch(
    `${API.PROTOCOL}://${API.DOMAIN}/${API.PATH.CARTS}/${API.VERB.ADD}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: 1,
        products: [
          { id: 1, quantity: 1 },
          { id: 2, quantity: 2 },
        ],
      }),
    }
  )
    .then((res) => res.json())
    .then((res) => res);
}
