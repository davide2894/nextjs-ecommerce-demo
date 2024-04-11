import { Stack, Skeleton } from "@mui/material";

function CartItemSkeleton() {
  return (
    <Stack
      direction="row"
      margin="10px auto"
      borderTop="1px solid lightgray"
      paddingTop="10px">
      <Skeleton height={250} variant="rectangular" width="100%" />
      <Stack justifyContent="space-between" width="100%" marginLeft="20px">
        <Skeleton height={50} width="100%" />
        <Skeleton height={50} width="100%" />
      </Stack>
    </Stack>
  );
}

export default CartItemSkeleton;
