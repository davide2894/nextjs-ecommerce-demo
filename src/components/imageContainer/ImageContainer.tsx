"use client";
import Image from "next/image";

interface ImageContainerProps {
  width: number;
  height: number;
  src: string;
  alt: string;
}

function ImageContainer({ width, height, src, alt }: ImageContainerProps) {
  return (
    <Image
      width={width}
      height={height}
      src={src}
      alt={alt}
      loading="lazy"
      style={{
        objectFit: "contain",
        borderRadius: "12px",
        padding: "14px",
      }}
    />
  );
}

export default ImageContainer;
