import { Card, CardContent, CardMedia, Skeleton, Stack } from "@mui/material";
import React from "react";

function ProductCardSkeleton() {
  return (
    <Card>
      <CardMedia>
        <Skeleton
          variant="rectangular"
          animation="wave"
          height="250px"
          width="250px"
          sx={{ background: "red" }}
        />
      </CardMedia>
      <CardContent>
        <Stack>
          <Skeleton variant="text" />
          <Skeleton variant="text" />
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ProductCardSkeleton;
