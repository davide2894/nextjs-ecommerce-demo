import ProductCard from "@/components/ProductCard";
import React from "react";
import { getProducts } from "../product-detail/actions/productDetailAction";

async function ProductListPage() {
  const products = await getProducts();

  if (!products) {
    return <div>No products found</div>;
  }

  return (
    <div>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

export default ProductListPage;
