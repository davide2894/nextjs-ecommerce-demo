import React from "react";
import Link from "next/link";
import AddToCartButton from "./AddToCartButton";
import { IProduct } from "@/lib/types";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

interface ProductCardProps {
  product: IProduct;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <Card sx={{ maxidth: 300 }}>
      <Link href={"/product-detail/" + product.id}>
        <CardMedia
          component="img"
          sx={{ height: 250, objectFit: "contain" }}
          src={product.images[0]}
          title={product.title}
        />
      </Link>
      <CardContent>
        <Box sx={{ height: 40 }}>
          <Typography gutterBottom variant="caption" component="div">
            {product.title.toLocaleUpperCase()}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <Typography variant="body1">€ {product.price}</Typography>
          <AddToCartButton product={product} />
        </Box>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
