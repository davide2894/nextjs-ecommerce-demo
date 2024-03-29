import { Button } from "@mui/material";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <p>E-COMMERCE</p>

        <Button variant="contained" href="/product-list">
          Go to the product list page
        </Button>
      </div>
    </main>
  );
}
