import Image from "next/image";
import Link from "next/link";
import ShoppingBag from "../shoppingBag/ShoppingBag";
import { AppBar, Toolbar } from "@mui/material";
import { getCart } from "@/db/queries/cart";
import SearchBar from "../searchBar/SearchBar";

async function Header() {
  const cart = await getCart();

  return (
    <>
      <AppBar position="relative">
        <Toolbar
          sx={{
            backgroundColor: "#f5f5f5",
            color: "#333",
            display: "flex",
            justifyContent: "space-around",
          }}>
          <Link href="/">
            <Image
              src={`/images/vercel.svg`}
              height={80}
              width={80}
              alt="Next.js e-commerce logo"
              priority
            />
          </Link>
          <SearchBar />
          <ShoppingBag numberOfItems={cart?.totalQuantity || 0} />
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
