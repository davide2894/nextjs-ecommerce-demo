import { cookies } from "next/headers";

export function storeCartIdLocally(cartId: string) {
  cookies().set("cartId", cartId);
}

export function getLocalCartId() {
  return cookies().get("cartId")?.value as string;
}
