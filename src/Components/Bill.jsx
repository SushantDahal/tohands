import Bills from "../assets/Bill.webp";
import { SiRocket } from "react-icons/si";
import India from "../assets/Made-in-India.webp";

const Bill = () => {
  return (
    <div className="w-full bill-container">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid md:grid-cols-2 gap-10 max-w-[1050px] mx-auto bg-[#1e1f1e] p-2 rounded-[30px]">
          <div className="pt-14 pl-12">
            <h1 className="text-5xl font-semibold text-white">Bill</h1>
            <div className="flex flex-col pt-8 gap-4 text-[#ffffff]">
              <div className="flex items-center gap-3 ">
                <SiRocket size={20} />
                <small className="text-[20px] font-sans">
                  Larger buttons for quick calculations.
                </small>
              </div>
              <div className="flex items-center gap-3 ">
                <SiRocket size={20} />
                <small className="text-[20px] font-sans">
                  4.5" color display for clarity.
                </small>
              </div>
              <div className="flex items-center gap-3 ">
                <SiRocket size={20} />
                <small className="text-[20px] font-sans">
                  Portable and easy to handle.
                </small>
              </div>
            </div>
            <div className="text-[#535B62] pt-10">
              <img src={India} alt="" className="max-w-[250px]" />
            </div>
          </div>
          <div className="">
            <img
              src={Bills}
              alt=""
              className="mx-auto shadow-[#81f181] shadow-2xl rounded-3xl rounded-ss-[60px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bill;
