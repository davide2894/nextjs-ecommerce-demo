import { Typography } from "@mui/material";
import Link from "@mui/material/Link";
import React from "react";

interface BackToButtonProps {
  target: string;
  text: string;
}

function BackToButton({ target, text }: BackToButtonProps) {
  return (
    <Link href={target}>
      <Typography variant="caption">{text}</Typography>
    </Link>
  );
}

export default BackToButton;
