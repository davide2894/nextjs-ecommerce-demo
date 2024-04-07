import { getProducts } from "@/app/product-detail/actions/productDetailAction";
import { Box, Grid } from "@mui/material";
import React from "react";
import ProductCard from "../productCard/ProductCard";
import { unstable_noStore } from "next/cache";

async function Products() {
  const products = await getProducts();

  if (!products) {
    return <div>No products found</div>;
  }

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard product={product} key={product.id} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Products;
