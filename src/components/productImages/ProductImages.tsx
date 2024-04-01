"use client";

import { useMediaQuery, ImageList, ImageListItem } from "@mui/material";
import React from "react";

interface IProductImagesProps {
  images: string[];
}

function ProductImages({ images }: IProductImagesProps) {
  const matchesTabletMediaQuery = useMediaQuery("(min-width:768px)");
  const matchesDesktopMediaQuery = useMediaQuery("(min-width:1024px)");
  let cols;

  console.log({ images });

  if (matchesTabletMediaQuery) {
    cols = 3;
  } else if (matchesDesktopMediaQuery) {
    cols = 5;
  } else {
    cols = 2;
  }
  return (
    <ImageList sx={{ maxWidth: 600 }} variant="quilted" cols={cols}>
      {images.map((image) => (
        <ImageListItem key={image}>
          <img src={image} alt="" />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default ProductImages;
