import { Box, Grid } from "@mui/material";
import ProductCard from "../productCard/ProductCard";
import { getProductsAction } from "@/app/product-list/action/ProductListActions";

async function Products() {
  const products = await getProductsAction();

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
