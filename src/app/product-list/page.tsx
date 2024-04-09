import { Suspense } from "react";
import Products from "@/components/products.tsx/Products";
import ProductsSkeleton from "@/components/products.tsx/ProductsSkeleton";

function ProductListPage() {
  return (
    <Suspense fallback={<ProductsSkeleton />}>
      <Products />
    </Suspense>
  );
}

export default ProductListPage;
