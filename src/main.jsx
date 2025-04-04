import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Beranda from "./Pages/Beranda";
import Produk from "./Pages/Produk";
import Kontak from "./Pages/Kontak";
import Cart from "./Pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Beranda />,
  },
  {
    path: "/produk",
    element: <Produk />,
  },
  {
    path: "/kontak",
    element: <Kontak />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
