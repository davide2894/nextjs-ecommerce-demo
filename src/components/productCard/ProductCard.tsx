import React from "react";
import Link from "next/link";
import AddToCartButton from "@/components/addToCartButton/AddToCartButton";
import { Product } from "@/lib/types";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import Price from "@/components/price/Price";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <Card>
      <Link href={"/product-detail/" + product.id}>
        <CardMedia
          component="img"
          src={product.images[0]}
          title={product.title}
        />
      </Link>
      <CardContent>
        <Stack>
          <Typography gutterBottom variant="overline" component="div">
            {product.title.toLocaleUpperCase()}
          </Typography>
          <Price price={product.price} />
        </Stack>
        <AddToCartButton product={product} />
      </CardContent>
    </Card>
  );
}

export default ProductCard;
