import record from "../assets/Record.webp";
import { SiRocket } from "react-icons/si";
import Pay from "../assets/Gpay.webp";

const Record = () => {
  return (
    <div className="w-full  record-container">
      <div className="max-w-[1240px] mx-auto min-w-[540px] px-4">
        <div className="grid md:grid-cols-2 gap-10 max-w-[1050px] mx-auto bg-[#edf3e8] p-2 rounded-[30px] ">
          <div className=" pt-14 pl-12">
            <h1 className="text-5xl font-semibold">Record</h1>
            <div className="flex flex-col pt-8 gap-4">
              <div className="flex items-center gap-3 text-[#535B62]">
                <SiRocket size={20} />
                <small className="text-[20px] font-sans">
                  Record sales and expenses.
                </small>
              </div>
              <div className="flex items-center gap-3 text-[#535B62]">
                <SiRocket size={20} />
                <small className="text-[20px] font-sans">
                  Record customer details: name, number, remark.
                </small>
              </div>
              <div className="flex items-center gap-3 text-[#535B62]">
                <SiRocket size={20} />
                <small className="text-[20px] font-sans">
                  Record payment type: Cash, Udhaar, UPI.
                </small>
              </div>
            </div>
            <div className="text-[#535B62] pt-10 mt-10">
              <div className="">
                <img src={Pay} alt="" className="w-full pr-20" />
              </div>
            </div>
          </div>
          <div className="">
            <img src={record} alt="" className=" mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Record;
