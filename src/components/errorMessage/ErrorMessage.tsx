import { Container, Typography } from "@mui/material";
import React from "react";

interface ErrorMessageProps {
  message: string;
}

function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
      }}>
      <Typography variant="h4" textAlign="center">
        {message}
      </Typography>
    </Container>
  );
}

export default ErrorMessage;
