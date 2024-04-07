import React from "react";
import Container from "@mui/material/Container";
import AddToCartButton from "@/components/addToCartButton/AddToCartButton";
import { notFound } from "next/navigation";
import { getProduct } from "../actions/productDetailAction";
import { Box, Stack, Typography } from "@mui/material";
import ProductImages from "@/components/productImages/ProductImages";
import BackToButton from "@/components/backToButton/BackToButton";
import Price from "@/components/price/Price";

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
    <Container>
      <Stack>
        <Box>
          <BackToButton target="/product-list" text="Back to products" />
          <Box>
            <ProductImages images={product.images} />
          </Box>
          <Stack marginTop="10px">
            <Box>
              <Typography variant="body1">{product.title}</Typography>
              <Price price={product.price} />
            </Box>
            <Box>
              <AddToCartButton product={product} />
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}

export default ProductDetailPage;
