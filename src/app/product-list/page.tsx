import { Suspense } from "react";
import Products from "@/components/products/Products";
import ProductsSkeleton from "@/components/products/ProductsSkeleton";

interface ProductListPageProps {
  searchParams?: { query: string };
}

async function ProductListPage({ searchParams }: ProductListPageProps) {
  return (
    <Suspense key={searchParams?.query || ""} fallback={<ProductsSkeleton />}>
      <Products query={searchParams?.query || ""} />
    </Suspense>
  );
}

export default ProductListPage;
