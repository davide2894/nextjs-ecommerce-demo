import React from "react";
import Image from "next/image";
import Price from "./Price";
import Link from "next/link";
import AddToCartButton from "./AddToCartButton";
import { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div>
      <Link href={"/product-detail/" + product.id}>
        <Image
          src={product.images[0]}
          alt={product.title}
          width={500}
          height={500}
        />
        <div>
          <h1>{product.title}</h1>
          <Price price={product.price} />
          <p>{product.description}</p>
        </div>
      </Link>
      <AddToCartButton productId={product.id} />
    </div>
  );
}

export default ProductCard;
