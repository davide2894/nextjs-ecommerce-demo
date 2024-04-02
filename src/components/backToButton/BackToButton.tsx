import { Typography } from "@mui/material";
import Link from "@mui/material/Link";
import React from "react";

interface IBackToButton {
  target: string;
  text: string;
}

function BackToButton({ target, text }: IBackToButton) {
  return (
    <Link href={target} style={backToLink}>
      <Typography variant="caption">{text}</Typography>
    </Link>
  );
}

const backToLink = {
  display: "block",
  color: "#000",
};

export default BackToButton;
