import Calculate from "../assets/Calculate.webp";
import { SiRocket } from "react-icons/si";
import f1 from "../assets/f1.webp";
import f2 from "../assets/f2.webp";
import f3 from "../assets/f3.webp";

const calculate = () => {
  return (
    <div className="w-full my-10 ">
      <div className="max-w-[1240px] mx-auto">
        <h1 className="text-center py-20 md:text-[54px] text-[40px] font-bold">
          Why Smart Calculator
        </h1>
        <div className="grid md:grid-cols-2 gap-10 max-w-[1050px] mx-auto bg-[#edf3e8] p-2 rounded-3xl ">
          <div className=" pt-14 pl-12">
            <h1 className="text-5xl font-semibold">Calculate</h1>
            <div className="flex flex-col pt-8 gap-4">
              <div className="flex items-center gap-3 text-[#535B62]">
                <SiRocket size={20} />
                <small className="text-[20px] font-sans">
                  Larger buttons for quick calculations.
                </small>
              </div>
              <div className="flex items-center gap-3 text-[#535B62]">
                <SiRocket size={20} />
                <small className="text-[20px] font-sans">
                  4.5" color display for clarity.
                </small>
              </div>
              <div className="flex items-center gap-3 text-[#535B62]">
                <SiRocket size={20} />
                <small className="text-[20px] font-sans">
                  Portable and easy to handle.
                </small>
              </div>
            </div>
            <div className="text-[#535B62] pt-10 mt-6">
              <h1 className="pt-4 pb-2">Featured in</h1>
              <div className="flex gap-6 items-center">
                <img src={f1} alt="" className="w-20 h-8" />
                <img src={f2} alt="" className="w-[105px] h-[32px]" />
                <img src={f3} alt="" className="w-[115px] h-[32px]" />
              </div>
            </div>
          </div>
          <div className="">
            <img src={Calculate} alt="" className="max-w-[450px] mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default calculate;
