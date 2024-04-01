import React from "react";
import Container from "@mui/material/Container";
import Image from "next/image";
import AddToCartButton from "@/components/AddToCartButton";
import { notFound } from "next/navigation";
import { getProduct } from "../actions/productDetailAction";
import {
  Box,
  Button,
  ImageList,
  ImageListItem,
  Link,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ProductImages from "@/components/productImages/ProductImages";

interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = await getProduct(params.id);

  if (!product) {
    return notFound();
  }

  return (
    <Container maxWidth="sm" sx={containerStyle}>
      <Box sx={{ height: "100vh" }}>
        <Link href="/product-list" sx={backToLink}>
          <Typography variant="caption">Back to product list page</Typography>
        </Link>
        <Box>
          <ProductImages images={product.images} />
        </Box>
        <Box sx={productInfoStyle}>
          <Box component="div">
            <Typography variant="body1">{product.title}</Typography>
            <Typography variant="body2">€ {product.price}</Typography>
          </Box>
          <Box component="div">
            <AddToCartButton product={product} />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

const containerStyle = {
  display: "flex",
  justifyContent: "column",
};

const categoryNameStyle = {
  marginTop: "20px",
  marginBottom: "10px",
};

const productInfoStyle = {
  display: "flex",
  flexDirection: "column",
  marginTop: "10px",
};

const backToLink = {
  display: "block",
  color: "#000",
  margin: "20px 0 10px",
};

export default ProductDetailPage;
