import CartContent from "@/components/cartContent/CartContent";
import { Suspense } from "react";
import Loading from "../loading";

async function CartPage() {
  return (
    <Suspense fallback={<Loading />}>
      <CartContent />
    </Suspense>
  );
}

export default CartPage;
