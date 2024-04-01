import ProductCard from "@/components/ProductCard";
import React, { Suspense } from "react";
import { getProducts } from "../product-detail/actions/productDetailAction";
import Looading from "../loading";

async function ProductListPage() {
  const products = await getProducts();

  if (!products) {
    return <div>No products found</div>;
  }

  return (
    <Suspense fallback={<Looading />}>
      <div>
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </Suspense>
  );
}

export default ProductListPage;
