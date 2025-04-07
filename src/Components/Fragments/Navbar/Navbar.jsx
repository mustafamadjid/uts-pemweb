import { Link } from "react-router";
import { useEffect, useState } from "react";

import { ShoppingCart } from "lucide-react";
import { UserRound } from "lucide-react";

const NavbarMenu = [
  {
    id: 1,
    title: "Beranda",
    path: "/",
  },
  {
    id: 2,
    title: "Produk",
    path: "/produk",
  },
];

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`flex justify-between items-center w-full padding-nav fixed top-0 z-10 ${
          scroll ? "bg-white shadow-md" : ""
        }`}
      >
        <div>
          <h1 className="font-extrabold text-4xl">
            Toko<span className="text-green-800">Ijo</span>
          </h1>
        </div>

        <div>
          <ul className="flex gap-5 ml-15">
            {NavbarMenu.map((menu) => {
              return (
                <li key={menu.id}>
                  <Link to={menu.path} className="hover:text-green-800">
                    <div className="text-lg">{menu.title}</div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <div className="flex gap-3 items-center">
            <Link
              className="flex gap-2 items-center hover:text-green-800 text-lg"
              to={"/cart"}
            >
              <ShoppingCart size={"1.5rem"} />
              Keranjang
            </Link>
            <Link className="flex gap-2 items-center hover:text-green-800 text-lg">
              <UserRound size={"1.5rem"} />
              Akun
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
