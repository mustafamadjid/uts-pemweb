import { Link } from "react-router";
import useFetch from "../Services/Hooks/customFetch";
import { useState } from "react";

import CardComplete from "../Components/Fragments/CardProduct/CardComplete";
import Navbar from "../Components/Fragments/Navbar/Navbar";

import { useDispatch } from "react-redux";
import { addToCart } from "../Services/Slice/handleCart";

const Produk = () => {
  const [url, setUrl] = useState("https://dummyjson.com/products");

  const categoryData = useFetch("https://dummyjson.com/products/categories");
  const productsData = useFetch(url);

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const loadingContent = () => {
    if (productsData.loading === true) {
      return (
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        </div>
      );
    } else {
      return productsData.data?.products.map((product) => (
        <CardComplete
          key={product.id}
          product={product}
          wrapVariant={"max-w-xs"}
          titleVariant={"w-3/4"}
          onAddToCart={handleAddToCart}
        />
      ));
    }
  };
  return (
    <>
      <div className="w-full h-[80px]">
        <Navbar />
      </div>

      <div className="wrapper w-full  padding-product flex gap-2.5 flex-row ">
        {/* Categories Component*/}
        <div className="bg-gray-100  p-10 flex flex-col gap-7 ">
          <h1
            className="text-[14px] font-semibold hover:text-green-700 cursor-pointer"
            onClick={() => setUrl("https://dummyjson.com/products")}
          >
            All Categories
          </h1>
          {categoryData.data?.map((category) => (
            <h1
              className="text-[16px] font-semibold hover:text-green-700 cursor-pointer"
              onClick={() =>
                setUrl(
                  `https://dummyjson.com/products/category/${category.slug}`
                )
              }
            >
              {category.name}
            </h1>
          ))}
        </div>

        {/* Product Component*/}
        <div className="max-h-screen padding-nav flex flex-col items-center gap-5 basis-3/4 overflow-auto">
          <div className="flex flex-row flex-wrap justify-center gap-18 items-center ">
            {loadingContent()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Produk;
