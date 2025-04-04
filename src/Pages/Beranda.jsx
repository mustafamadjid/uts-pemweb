import Navbar from "../Components/Fragments/Navbar/Navbar";
import Banner from "../Components/Fragments/Banner/Banner";
import Manfaat from "../Components/Fragments/Manfaat/Manfaat";
import Brand from "../Components/Fragments/Brand/Brand";
import FeaturedProducts from "../Components/Layout/Featured";

const Beranda = () => {
  return (
    <>
      <Navbar />

      {/* Banner Component*/}
      <div className="w-full min-h-[700px] bg-[#f0f2f3] flex items-center justify-center mt-23 rounded-b-3xl">
        <Banner />
      </div>

      {/* Manfaat component*/}
      <div className="manfaat  w-full min-h-[150px]  mb-20">
        <Manfaat />
      </div>

      {/* Brand component*/}
      <div className="brand w-1/2 mx-auto h-[340px]">
        <Brand />
      </div>

      {/* Featured Product Component*/}
      <div className="brand w-4/5 mx-auto h-screen">
        <FeaturedProducts />

        {/* Footer Component*/}
      </div>
    </>
  );
};

export default Beranda;
