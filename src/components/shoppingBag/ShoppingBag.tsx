import React from "react";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Link from "next/link";
import { Box, IconButton, Typography } from "@mui/material";

interface IShoppingBagProps {
  numberOfItems: number;
}

function ShoppingBag({ numberOfItems }: IShoppingBagProps) {
  return (
    <Box>
      <IconButton href="/cart">
        <ShoppingBagOutlinedIcon />
        <Typography color="black" variant="caption">
          {numberOfItems}
        </Typography>
      </IconButton>
    </Box>
  );
}

export default ShoppingBag;
