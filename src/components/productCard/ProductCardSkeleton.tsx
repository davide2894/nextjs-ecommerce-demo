import { Card, CardContent, Skeleton, Stack } from "@mui/material";
import { log } from "console";

function ProductCardSkeleton() {
  log("ProductCardSkeleton");
  return (
    <Card>
      <Skeleton variant="rectangular" height={250} animation="wave" />
      <CardContent>
        <Stack>
          <Skeleton animation="wave" height={20} />
          <Skeleton animation="wave" height={20} />
        </Stack>
        <Skeleton animation="wave" height={50} />
      </CardContent>
    </Card>
  );
}

export default ProductCardSkeleton;
