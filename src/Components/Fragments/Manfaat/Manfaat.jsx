import { Truck } from "lucide-react";
import { Percent } from "lucide-react";
import { Clock } from "lucide-react";
import { HandCoins } from "lucide-react";

const Manfaat = () => {
  return (
    <div className="lg:container bg-white mx-auto shadow-md p-7 rounded-2xl ">
      <div className="grid grid-ri-4">
        <div className="manfaat-wrapper flex items-center justify-center gap-10">
          <div className="flex items-center gap-4">
            <p>
              <Truck size="3rem" />
            </p>
            <div>
              <h4 className="text-base text-[#272343] capitalize font-inter  font-medium mb-2.5">
                Pengiriman
              </h4>
              <h5 className="text-sm text-[#9a9caa] font-inter font-normal">
                Cepat sampai ga pake lambat
              </h5>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <p>
              <Percent size="3rem" />
            </p>
            <div>
              <h4 className="text-base text-[#272343] capitalize font-inter  font-medium mb-2.5">
                Biaya
              </h4>
              <h5 className="text-sm text-[#9a9caa] font-inter font-normal">
                Harga murah ramah dompet
              </h5>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <p>
              <Clock size="3rem" />
            </p>
            <div>
              <h4 className="text-base text-[#272343] capitalize font-inter  font-medium mb-2.5">
                Waktu
              </h4>
              <h5 className="text-sm text-[#9a9caa] font-inter font-normal">
                Akses dan dukungan 24 jam
              </h5>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <p>
              <HandCoins size="3rem" />
            </p>
            <div>
              <h4 className="text-base text-[#272343] capitalize font-inter  font-medium mb-2.5">
                Pembayaran
              </h4>
              <h5 className="text-sm text-[#9a9caa] font-inter font-normal">
                Beragam metode pembayaran dengan jaminan keamanan
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manfaat;
