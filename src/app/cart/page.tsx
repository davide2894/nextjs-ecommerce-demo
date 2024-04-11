import CartContent from "@/components/cartContent/CartContent";
import { Suspense } from "react";
import CartContentSkeleton from "@/components/cartContent/CartContentSkeleton";

function CartPage() {
  return (
    <Suspense fallback={<CartContentSkeleton />}>
      <CartContent />
    </Suspense>
  );
}

export default CartPage;
