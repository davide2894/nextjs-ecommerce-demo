import { getProduct } from "@/lib/data/productsData";
import React from "react";
import Container from "@mui/material/Container";
import Image from "next/image";
import AddToCartButton from "@/components/AddToCartButton";

interface ProductDetailPageProps {
  params: {
    id: number;
  };
}

async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = await getProduct(params.id.toString());

  return (
    <Container>
      {product.images.map((image: string) => (
        <Image
          src={image}
          key={product.id}
          alt={product.title}
          width={200}
          height={200}
        />
      ))}

      <div className="product-info">
        <p>{product.title}</p>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <p>{product.discountPercentage}</p>
        <p>{product.brand}</p>
        <p>{product.category}</p>
        <div className="rating">
          Rating (to replace with stars that get filled based on rounded rating
          number): {product.rating}
        </div>
      </div>
      <AddToCartButton productId={params.id} />
    </Container>
  );
}

export default ProductDetailPage;
