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
  {
    id: 3,
    title: "Kontak",
    path: "/kontak",
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
          <ul className="flex gap-4 items-center">
            {NavbarMenu.map((menu) => {
              return (
                <li key={menu.id}>
                  <Link to={menu.path} className="hover:text-green-800">
                    <div>{menu.title}</div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <div className="flex gap-3 items-center">
            <Link
              className="flex gap-2 items-center hover:text-green-800"
              to={"/cart"}
            >
              <ShoppingCart />
              Keranjang
            </Link>
            <Link className="flex gap-2 items-center hover:text-green-800">
              <UserRound />
              Akun
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
