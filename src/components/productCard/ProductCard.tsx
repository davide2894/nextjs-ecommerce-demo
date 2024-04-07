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
import ImageContainer from "../imageContainer/ImageContainer";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <Card>
      <Link href={"/product-detail/" + product.id}>
        <CardMedia>
          <ImageContainer
            width={250}
            height={250}
            src={product.images[0]}
            alt={product.title}
          />
        </CardMedia>
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
