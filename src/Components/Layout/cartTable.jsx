const CartTable = ({
  cartItems,
  handleAddToCart,
  handleRemoveFromCart,
  handleDecreaseCart,
}) => {
  const qtyPrice = (qty, price) => {
    return (qty * price).toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  };

  return (
    <div className="relative flex flex-col w-full h-full overflow-scroll   bg-white shadow-md rounded-lg bg-clip-border padding-nav">
      <table className="w-full ">
        <thead className="text-white">
          <tr className="bg-green-700">
            <th className="w-1/2 p-4 font-semibold text-lg">Produk</th>
            <th className="p-4 font-semibold text-lg">Harga</th>
            <th className="p-4 font-semibold text-lg">Jumlah</th>
            <th className="p-4 font-semibold text-lg">Total</th>
            <th className="p-4 font-semibold text-lg">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id} className="hover:bg-slate-50">
              <td className="p-4 border-b border-slate-200 flex gap-5 items-center">
                <div className="w-1/2">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="max-w-[120px] mx-auto hover:shadow-lg hover:bg-white"
                  />
                </div>
                <div className=" flex flex-col gap-5">
                  <p className="max-w-4/6 text-lg font-semibold">
                    {item.title}
                  </p>
                  <p className=" py-2 px-5 w-fit bg-green-500 text-white font-semibold rounded-2xl  text-center">
                    {item.category}
                  </p>
                </div>
              </td>
              <td className="p-4 text-center text-lg border-slate-200 border-b">
                {qtyPrice(item.cartQuantity, item.price)}
              </td>
              <td className="p-4 border-b border-slate-200">
                <div className="flex justify-center items-center gap-5">
                  <p className="p-4 text-center text-lg order-1">
                    {item.cartQuantity}
                  </p>
                  <button
                    className="p-2 text-center text-lg order-2 bg-green-600 text-white rounded-lg cursor-pointer active:scale-95"
                    onClick={() => handleAddToCart(item)}
                  >
                    +
                  </button>
                  <button
                    className="p-2 text-center text-lg text-white rounded-lg bg-green-600 cursor-pointer active:scale-95"
                    onClick={() => handleDecreaseCart(item)}
                  >
                    -
                  </button>
                </div>
              </td>
              <td className="text-lg text-center border-b border-slate-200">
                {}
              </td>
              <td>
                <button
                  className="p-2 text-center font-semibold text-lg text-white rounded-lg bg-red-500 cursor-pointer active:scale-95 hover:bg-red-600"
                  onClick={() => handleRemoveFromCart(item)}
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
