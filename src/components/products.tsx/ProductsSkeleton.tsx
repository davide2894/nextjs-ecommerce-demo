import { Box, Grid } from "@mui/material";
import ProductCardSkeleton from "../productCard/ProductCardSkeleton";

export default function ProductsSkeleton() {
  console.log("rendering ProductsSkeleton");
  return (
    // <Box sx={{ flexGrow: 1, p: 2 }}>
    //   <Grid container spacing={4}>
    //     {Array.from({ length: 12 }).map((_, index) => (
    //       <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
    //         <ProductCardSkeleton key={index} />
    //       </Grid>
    //     ))}
    //   </Grid>
    // </Box>
    <>
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
    </>
  );
}
