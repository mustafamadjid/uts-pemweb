import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const brandLogo = [
  {
    id: 1,
    src: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
  },
  {
    id: 2,
    src: "https://cdn.freebiesupply.com/logos/large/2x/nike-4-logo-black-and-white.png",
  },
  {
    id: 3,
    src: "https://images.seeklogo.com/logo-png/31/2/calvin-klein-logo-png_seeklogo-311014.png",
  },
  {
    id: 4,
    src: "https://www.logo.wine/a/logo/Reebok/Reebok-Logo.wine.svg",
  },
  {
    id: 5,
    src: "https://cdn.freebiesupply.com/logos/large/2x/new-balance-2-logo-black-and-white.png",
  },
  {
    id: 6,
    src: "https://download.logo.wine/logo/Zara_(retailer)/Zara_(retailer)-Logo.wine.png",
  },
  {
    id: 7,
    src: "https://static.cdnlogo.com/logos/a/92/asus.png",
  },
  {
    id: 8,
    src: "https://static.cdnlogo.com/logos/l/27/lenovo.png",
  },
  {
    id: 9,
    src: "https://1000logos.net/wp-content/uploads/2016/09/Acer-Logo.png",
  },
  {
    id: 10,
    src: "https://download.logo.wine/logo/Samsung/Samsung-Logo.wine.png",
  },
  {
    id: 11,
    src: "https://static-00.iconduck.com/assets.00/apple-logo-icon-1661x2048-8adk63j7.png",
  },
  {
    id: 12,
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/512px-Xiaomi_logo_%282021-%29.svg.png",
  },
];

const Brand = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <>
      <div>
        <h1 className="font-bold text-3xl text-center mt-10 mb-10">
          Pilihan Brand
        </h1>
      </div>
      <div className="slider-container ">
        <Slider {...settings}>
          {brandLogo?.map((brand) => (
            <div key={brand?.id}>
              <img src={brand?.src} className="h-[100px]" />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Brand;
