import { CircularProgress, Container } from "@mui/material";
import React from "react";

function Looading() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
      }}>
      <CircularProgress sx={{ marginTop: 400 }} />
    </Container>
  );
}

export default Looading;
