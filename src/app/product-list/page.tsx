import ProductCard from "@/components/productCard/ProductCard";
import React, { Suspense } from "react";
import { getProducts } from "../product-detail/actions/productDetailAction";
import Looading from "../loading";
import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/material";

async function ProductListPage() {
  const products = await getProducts();

  if (!products) {
    return <div>No products found</div>;
  }

  return (
    <Suspense fallback={<Looading />}>
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid xs={12} sm={6} md={4} lg={3} key={product.id}>
              <ProductCard product={product} key={product.id} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Suspense>
  );
}

export default ProductListPage;
