import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Beranda from "./Pages/Beranda";
import Produk from "./Pages/Produk";
import Kontak from "./Pages/Kontak";
import Cart from "./Pages/Cart";

import handleCartSlice from "./Services/Slice/handleCart";
import { getTotals } from "./Services/Slice/handleCart";

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
    path: "/cart",
    element: <Cart />,
  },
]);

const store = configureStore({
  reducer: {
    cart: handleCartSlice.reducer,
  },
});

store.dispatch(getTotals());

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
