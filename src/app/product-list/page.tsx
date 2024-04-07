import ProductCard from "@/components/productCard/ProductCard";
import React, { Suspense } from "react";
import Looading from "../loading";
import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/material";
import ErrorMessage from "@/components/errorMessage/ErrorMessage";
import log from "@/lib/log";
import { getProductsAction } from "./action/ProductListActions";
import Loading from "../loading";
import Products from "@/components/products/Products";

interface ProductListPageProps {
  searchParams?: { query: string };
}

async function ProductListPage({ searchParams }: ProductListPageProps) {
  return (
    <Suspense key={searchParams?.query || ""} fallback={<Loading />}>
      <Products query={searchParams?.query || ""} />
    </Suspense>
  );
}

export default ProductListPage;
