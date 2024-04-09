import { getCart } from "@/db/queries/cart";
import { Container, Box, Stack, Typography, Button } from "@mui/material";
import { log } from "console";
import { redirect } from "next/navigation";
import BackToButton from "../backToButton/BackToButton";
import CartItem from "../cartItem/CartItem";

async function CartContent() {
  const cart = await getCart();
  log({ cartPageInfo: cart });

  if (!cart?.totalQuantity) {
    redirect("/");
  }
  return (
    <Container maxWidth="sm">
      <Box>
        {cart.items &&
          cart.items.map((cartItem) => (
            <CartItem item={cartItem} key={cartItem.id} />
          ))}
        <hr />
        <Stack spacing={2}>
          <Stack direction="row" justifyContent="space-between">
            <Typography fontWeight="bold">Subtotal</Typography>
            <Typography fontWeight="bold">{cart.subTotal}</Typography>
          </Stack>
          <Typography>Shipping and taxes calculated at checkout</Typography>
          <Stack>
            <Button variant="contained">Checkout</Button>
            <Stack direction="row" spacing={2} justifyContent="center">
              <Typography variant="caption">or</Typography>
              <BackToButton target="/product-list" text="Continue Shopping" />
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
}

export default CartContent;