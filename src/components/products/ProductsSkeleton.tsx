import { Box, Grid } from "@mui/material";
import ProductCardSkeleton from "../productCard/ProductCardSkeleton";

async function ProductsSkeleton() {
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={4}>
        {Array.from({ length: 12 }).map((_, idx) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
            <ProductCardSkeleton key={idx} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductsSkeleton;
