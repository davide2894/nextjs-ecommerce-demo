import ProductCard from "@/components/productCard/ProductCard";
import React, { Suspense } from "react";
import { getProducts } from "../product-detail/actions/productDetailAction";
import Looading from "../loading";
import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/material";
import ErrorMessage from "@/components/errorMessage/ErrorMessage";
import log from "@/lib/log";

interface ProductListPageProps {
  searchParams?: { query: string };
}

async function ProductListPage({ searchParams }: ProductListPageProps) {
  console.log({ searchParamsQuery: searchParams?.query });
  const products = searchParams?.query
    ? await getProducts(searchParams.query)
    : await getProducts();

  log({ productsLength: products.length, products });

  if (!products.length) {
    return (
      <ErrorMessage message="No products were found :/ Try a different parameter" />
    );
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
