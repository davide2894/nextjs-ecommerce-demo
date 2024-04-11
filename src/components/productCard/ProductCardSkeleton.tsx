import { Card, CardContent, Skeleton, Stack } from "@mui/material";
import { log } from "console";

function ProductCardSkeleton() {
  log("ProductCardSkeleton");
  return (
    <Card>
      <Skeleton height={250} variant="rectangular" />
      <CardContent>
        <Stack>
          <Skeleton height={20} />
          <Skeleton height={20} />
        </Stack>
        <Skeleton height={50} />
      </CardContent>
    </Card>
  );
}

export default ProductCardSkeleton;
