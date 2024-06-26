import { getProductsAction } from "@/app/product-list/action/ProductListActions";
import { Box, Grid } from "@mui/material";
import ErrorMessage from "../errorMessage/ErrorMessage";
import ProductCard from "../productCard/ProductCard";
import { log } from "console";

interface ProductsPros {
  query?: string;
}

async function Products({ query }: ProductsPros) {
  log({ query });

  const products = query
    ? await getProductsAction(query)
    : await getProductsAction();

  log({ productsLength: products.length, products });

  if (!products.length) {
    return (
      <ErrorMessage message="No products were found :/ Try a different parameter" />
    );
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
