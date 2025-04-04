import PropTypes from "prop-types";

import { ShoppingCart } from "lucide-react";

const CardProduct = ({ product, onAddToCart, wrapVariant, titleVariant }) => {
  return (
    <>
      <div className={` ${wrapVariant} flex flex-col gap-5 p-4`}>
        <div className=" rounded-lg overflow-hidden shadow-lg inset-shadow-xs w-full">
          <div className="bg-[#f7f7f5] p-4 max-h-86 ">
            <img
              className=" w-full mx-auto object-cover"
              src={product?.images[0]}
              alt={product?.title}
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <div
              className={`font-semibold text-[18px] text-[#272343] ${titleVariant}`}
            >
              {product?.title}
            </div>
            <div>
              {product?.price.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
            </div>
          </div>
          <div className="shop cart">
            <div className="bg-green-600 p-2 rounded-md cursor-pointer hover:bg-green-500">
              <ShoppingCart className="text-white" onClick={onAddToCart} />
            </div>
          </div>
        </div>
      </div>
    </>
  );

  //

  CardProduct.propTypes = {
    product: PropTypes.object,
    onAddToCart: PropTypes.func,
    wrapVariant: PropTypes.string,
    titleVariant: PropTypes.string,
  };
};
export default CardProduct;
