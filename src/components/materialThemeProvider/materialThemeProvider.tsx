"use client";

import theme from "@/lib/theme";
import { ThemeProvider } from "@mui/material";
import React from "react";

function MaterialThemeProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log(children);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default MaterialThemeProvider;
