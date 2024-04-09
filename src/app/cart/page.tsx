import CartContent from "@/components/cartContent/CartContent";
import { Suspense } from "react";
import Loading from "@/app/loading";

async function CartPage() {
  return (
    <Suspense fallback={<Loading />}>
      <CartContent />
    </Suspense>
  );
}

export default CartPage;
