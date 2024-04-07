import { Suspense } from "react";
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
