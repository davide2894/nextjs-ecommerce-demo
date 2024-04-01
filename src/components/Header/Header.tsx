import Image from "next/image";
import Link from "next/link";
import ShoppingBag from "../shoppingBag/ShoppingBag";
import { getCart } from "@/db/queries/cart";

async function Header() {
  const cart = await getCart();

  return (
    <div>
      <nav className="header">
        <div className="headerLogo">
          <Link href="/" className="linkToHome">
            <Image
              src={`/images/vercel.svg`}
              height={40}
              width={40}
              alt="Next.js e-commerce logo"
            />
          </Link>
        </div>
        <div className="headerRight">
          <ShoppingBag numberOfItems={cart.totalQuantity} />
        </div>
      </nav>
    </div>
  );
}

export default Header;
