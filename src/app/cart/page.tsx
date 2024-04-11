import CartContent from "@/components/cartContent/CartContent";
import { Suspense } from "react";
import { Container } from "@mui/material";
import CartContentSkeleton from "@/components/cartContent/CartContentSkeleton";

function CartPage() {
  return (
    <Suspense fallback={<CartContentSkeleton />}>
      <Container>
        <CartContent />
      </Container>
    </Suspense>
  );
}

export default CartPage;
