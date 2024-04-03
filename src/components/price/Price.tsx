import { Typography } from "@mui/material";
import React from "react";

interface PriceProps {
  price: number;
}

function Price({ price }: PriceProps) {
  return <Typography variant="body2">€ {price}</Typography>;
}

export default Price;
