import { Typography, Container } from "@mui/material";

export default function NotFoundPage() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
      }}>
      <Typography variant="h2" textAlign="center">
        Page not found :/
      </Typography>
      ;
    </Container>
  );
}
