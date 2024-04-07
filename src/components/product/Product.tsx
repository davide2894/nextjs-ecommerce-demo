import { getProductAction } from "@/app/product-detail/actions/productDetailAction";
import { Container, Stack, Box, Typography } from "@mui/material";
import { notFound } from "next/navigation";
import AddToCartButton from "../addToCartButton/AddToCartButton";
import BackToButton from "../backToButton/BackToButton";
import Price from "../price/Price";
import ProductImages from "../productImages/ProductImages";

interface ProductProps {
  id: string;
}

async function Product({ id }: ProductProps) {
  const product = await getProductAction(id);

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

export default Product;
