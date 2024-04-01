import { Box, Button, Typography } from "@mui/material";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}>
        <Typography variant="h1" textAlign="center">
          Welcome to the Next Ecommerce
        </Typography>

        <Button
          variant="outlined"
          sx={{ width: "200px", margin: "50px auto" }}
          href="/product-list">
          Start shopping
        </Button>
      </Box>
    </main>
  );
}
