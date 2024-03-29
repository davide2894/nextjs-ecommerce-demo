import React from "react";
import Image from "next/image";
import Price from "./Price";
import AddToCartButton from "./AddToCartButton";
interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div>
      <Image
        src={product.images[0]}
        alt={product.title}
        width={500}
        height={500}
        // priority
      />

      <div>
        <h1>{product.title}</h1>
        <Price price={product.price} />
        <p>{product.description}</p>
        <AddToCartButton
        //   productId={product.id}
        //   incrementProductQuantity={incrementProductQuantity}
        />
      </div>
    </div>
  );
}

export default ProductCard;
