import React, { Suspense } from "react";
import Product from "@/components/product/Product";
import Loading from "@/app/loading";

interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

async function ProductDetailPage({ params }: ProductDetailPageProps) {
  return (
    <Suspense key={params.id} fallback={<Loading />}>
      <Product id={params.id} />
    </Suspense>
  );
}

export default ProductDetailPage;
