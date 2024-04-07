import React from "react";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Box, IconButton, Typography } from "@mui/material";

interface ShoppingBagProps {
  numberOfItems: number;
}

function ShoppingBag({ numberOfItems }: ShoppingBagProps) {
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
