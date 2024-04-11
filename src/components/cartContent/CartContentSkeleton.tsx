import { Stack, Skeleton, Container } from "@mui/material";
import CartItemSkeleton from "../cartItem/CartItemSkeleton";
import { log } from "console";

export default function CartContentSkeleton() {
  log("CartContentSkeleton rendered");

  return (
    <Container>
      {Array.from({ length: 3 }).map((_, idx) => (
        <CartItemSkeleton key={idx} />
      ))}
      <hr />
      <Stack spacing={2}>
        <Stack>
          <Skeleton />
        </Stack>
        <Stack>
          <Skeleton height={50} />
        </Stack>
      </Stack>
    </Container>
  );
}
