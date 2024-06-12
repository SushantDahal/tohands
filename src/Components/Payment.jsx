import payment from "../assets/Payment.webp";
import { SiRocket } from "react-icons/si";
import review from "../assets/review.svg";

const Payment = () => {
  return (
    <div className="w-full ">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid md:grid-cols-2 gap-10 max-w-[1050px] mx-auto  bg-[#edf3e8] p-2 rounded-[30px]">
          <div className=" pt-14 pl-12">
            <h1 className="text-5xl font-semibold ">Payment</h1>
            <div className="flex flex-col pt-8 gap-4 text-[#535B62]">
              <div className="flex items-center gap-3 ">
                <SiRocket size={20} />
                <small className="text-[20px] font-sans">
                  Generate dynamic QR through your UPI ID.
                </small>
              </div>
              <div className="flex items-center gap-3 ">
                <SiRocket size={20} />
                <small className="text-[20px] font-sans">
                  Minimize customer negotiation for smoother transactions.
                </small>
              </div>
              <div className="flex items-center gap-3 ">
                <SiRocket size={20} />
                <small className="text-[20px] font-sans">
                  Increase revenue seamlessly.
                </small>
              </div>
            </div>
            <div className="text-[#535B62] pt-12 px-4 mt-10 ">
              <img src={review} alt="" className="max-w-[250px]" />
            </div>
          </div>
          <div className="">
            <img src={payment} alt="" className="max-w-[500px] mx-auto " />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Payment;
