import CardProduct from "../Fragments/CardProduct/CardProduct";

import Slider from "react-slick";

import useFetch from "../../Services/Hooks/customFetch";

const FeaturedProducts = () => {
  const { data } = useFetch(
    "https://dummyjson.com/products?limit=10&skip=2&select=title,price,images"
  );

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <>
      <div>
        <h1 className="font-bold text-3xl mt-10">Produk Pilihan </h1>
      </div>
      <div className="slider-container">
        <Slider {...settings} className="">
          {/* <div className="flex  justify-center items-center gap-4"> */}
          {data?.products.map((product) => (
            <CardProduct
              key={product.id}
              product={product}
              wrapVariant={"max-w-sm"}
              titleVariant={"w-full"}
            />
          ))}
          {/* </div> */}
        </Slider>
      </div>
    </>
  );
};

export default FeaturedProducts;
