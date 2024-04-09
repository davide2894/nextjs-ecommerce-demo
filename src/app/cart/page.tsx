import CartContent from "@/components/cartContent/CartContent";
import { Suspense } from "react";
import Loading from "../loading";
import { Container } from "@mui/material";

async function CartPage() {
  return (
    <Suspense fallback={<Loading />}>
      <Container>
        <CartContent />
      </Container>
    </Suspense>
  );
}

export default CartPage;
