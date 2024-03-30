import Image from "next/image";
import Link from "next/link";
import ShoppingBag from "../ShoppingBag";

function Header() {
  return (
    <div>
      <nav className="">
        <div className="">
          <Link href="/" className="linkToHome">
            <Image
              src={`/images/vercel.svg`}
              height={40}
              width={40}
              alt="Next.js e-commerce logo"
            />
          </Link>
        </div>
        <div className="">
          {/* <form action={searchProducts}>
            <div className="form-control">
              <input
                name="searchQuery"
                placeholder="Search"
                className="input-bordered input w-full min-w-[100px]"
              />
            </div>
          </form> */}
          <ShoppingBag numberOfItems={0} />
        </div>
      </nav>
    </div>
  );
}

export default Header;
