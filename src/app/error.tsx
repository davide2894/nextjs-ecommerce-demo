"use client";

import { Container, Typography } from "@mui/material";

export default function ErrorPage() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
      }}>
      <Typography variant="h4" textAlign="center" alignSelf="center">
        Oops! Something went wrong :/
      </Typography>
    </Container>
  );
}
