import { Stack, Skeleton } from "@mui/material";
import CartItemSkeleton from "../cartItem/CartItemSkeleton";

export default function CartContentSkeleton() {
  return (
    <>
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
    </>
  );
}
